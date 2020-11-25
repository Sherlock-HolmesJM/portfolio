import React, { Component } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { mediaQueries } from './config';

interface Props {}

interface State {
  sections: string[];
  activeSection: string;
  isOpen: boolean;
  matches: boolean;
  sticky: boolean;

  setActiveSection: (section: string) => void;
  toggleOpen: () => void;
}

const Context = React.createContext({} as State);

class Provider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeSection: '',
      sections: ['home', 'about', 'services', 'portfolio', 'experience'],
      isOpen: false,
      matches: false,
      sticky: false,

      setActiveSection: this.setActiveSection,
      toggleOpen: this.toggleOpen,
    };
  }

  setActiveSection = (section: string) => {
    this.setState({ activeSection: section.toLocaleLowerCase() });
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    const mediaQuery = window.matchMedia(`(${mediaQueries.query1})`);

    mediaQuery.onchange = () => {
      this.setState({ matches: mediaQuery.matches, isOpen: false });
    };

    this.setState({ matches: mediaQuery.matches }); // first call is needed

    ScrollTrigger.create({
      trigger: '#header',
      start: 'center top',
      scrub: 1,
      onUpdate: (self) => {
        this.setState({ sticky: self.progress === 1 });
      },
    });

    gsap.utils.toArray('.section').forEach((child) => {
      ScrollTrigger.create({
        trigger: child as Element,
        id: (child as Element).id,
        start: 'top center',
        end: 'bottom center',

        onEnter: (self) => this.setActiveSection(self.vars.id as string),
        onEnterBack: (self) => this.setActiveSection(self.vars.id as string),
      });
    });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context };

export default Provider;
