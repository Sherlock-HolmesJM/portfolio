import React, { Component } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



interface Props {}

interface State {
   sections: string[],
   activeSection: string,

   setActiveSection: (section: string) => void,
}

const Context = React.createContext({} as State);

class Provider extends Component<Props, State> {
   constructor(props: Props) {
      super(props);

      this.state = {
         activeSection: '',
         sections: ['home', 'about', 'services', 'portfolio', 'experience'],

         setActiveSection: this.setActiveSection,
      };
   };

   setActiveSection = (section: string) => { this.setState({ activeSection: section.toLocaleLowerCase() }) };

   componentDidMount() {

      gsap.utils.toArray('.section').forEach((child) => {
         ScrollTrigger.create({ 
            trigger: child as Element,
            id: (child as Element).id,
            start: 'top center',
            end: 'bottom center',

            onEnter: self => this.setActiveSection(self.vars.id as string),
            onEnterBack: self => this.setActiveSection(self.vars.id as string),
         })
      })

   };

   render() {
      return (
         <Context.Provider value={{...this.state}}>
            { this.props.children }
         </Context.Provider>
      )
   }
}

export { Context };

export default Provider
