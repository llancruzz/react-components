import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from "./components/EventBinding";
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents'
import UserData from './components/UserData';
import UserMessage from './components/UserMessage';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting name="Alan" /> */}
      {/* <StatefulGreeting name="Anna" /> */}
      {/* <HooksCounter name="Mike" /> */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingFunctional /> */}
      {/* <NestingComponents /> */}
      {<MethodsAsPropsParent/>}
      
    </div>
  );
}

export default App;
