// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "prismjs/components/prism-jsx";

// Require CSS
require("normalize.css");

const images = {
  colage: require("../assets/colage.png"),
  hang: require("../assets/häng.jpg"),
  tummen: require("../assets/tummen.jpg"),
  framework: require("../assets/framework.png"),
  reactalone: require("../assets/reactalone.jpg"),
  jssanta: require("../assets/jssanta.jpg"),
  meme: require("../assets/meme.png"),
  aww: require("../assets/aww.jpg"),
  vue: require("../assets/vue.jpg"),
  opps: require("../assets/opps.jpg"),
};

preloader(images);
const theme = createTheme(
  {
    primary: "white",
    secondary: "#333333",
    tertiary: "#513675",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Image src={images.framework.replace("/", "")} />
        </Slide>

        {/*OPPS*/}
        <Slide transition={["zoom"]}>
          <Image src={images.opps.replace("/", "")} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Marcus "Babymac" Wendel
          </Heading>
          <List>
            <ListItem>Smygehamn <small>(Born: Lund)</small></ListItem>
            <ListItem>Technical gymnasium <small>(Trelleborg)</small></ListItem>
            <ListItem>Architecture ⊙﹏⊙</ListItem>
            <ListItem>Sälen (⌐▨_▨)</ListItem>
            <ListItem>Purple Scout AB <small>(Since 2017)</small></ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Image src={images.colage.replace("/", "")} />
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Image src={images.tummen.replace("/", "")} />
          <Text margin="10px 0 0" textColor="quarternary" size={4} bold>
            SMC Instructor since 2015
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="primary">
            Frontend Frameworks
          </Heading>
          <Text margin="10px 0 0" textColor="quarternary" size={4} bold>
            in
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={3} bold caps>
            Javascript
          </Text>
          <Text margin="40px 0 0" textColor="quarternary" size={3} caps>
          (⊙＿⊙)
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Theres more then one?......yes
          </Heading>
          <List>
            <ListItem>JQuery</ListItem>
            <ListItem>AngularJS</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Angular 2-7</ListItem>
          </List>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            No, this is not all of them...
          </Text>
        </Slide>

{/*JQUERY*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            JQuery
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`$(document).ready(function(){
 $("#msgid").html("This is Hello World by JQuery");
});
<div id="msgid">
</div>`}
          />
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            What can it do?
          </Heading>
          <List>
            <ListItem>HTML/DOM manipulation</ListItem>
            <ListItem>CSS manipulation</ListItem>
            <ListItem>HTML event methods</ListItem>
            <ListItem>Effects and animations</ListItem>
            <ListItem>AJAX</ListItem>
            <ListItem>Plugins <small>for almost any task out there "ish"</small></ListItem>
          </List>
        </Slide>

{/*ANGULARJS*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            AngularJS
          </Heading>
          <CodePane
            style={{ fontSize: 17, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`//===JS FILE===
var app = angular.module("app", []);
app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";  
});

//===HTML FILE===
<body ng-app="app">
  <div ng-controller="HelloController">
    <h2>{{message}}</h2>
  </div>
</body>`}
          />
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            <Image src={"https://i.gifer.com/OjDL.gif"} />
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            AWESOME!! Right? Come on? Plz!
          </Heading>
          <List>
            <ListItem>Awesome! <small>(then, not today)</small></ListItem>
            <ListItem>SPA</ListItem>
            <ListItem>Two-way data binding</ListItem>
            <ListItem>Faster development</ListItem>
            <ListItem>Easy learning</ListItem>
            <ListItem>MVC <small>(Model, View and Controller)</small></ListItem>
            <ListItem>Developed by Google</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Flawless right?? Nope!
          </Heading>
          <List>
            <ListItem>Poor documentation</ListItem>
            <ListItem>Two-way data binding</ListItem>
            <ListItem>Logic in HTML = Problems</ListItem>
            <ListItem>AngularJS works directly with DOM</ListItem>
            <ListItem>Not that easy learning after all</ListItem>
            <ListItem>Scales poorly</ListItem>
          </List>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            <Image src={"https://media.giphy.com/media/Wf8lxu79Yv5za/giphy.gif"} />
          </Text>
        </Slide>

{/*REACT*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            React
          </Heading>
          <CodePane
            style={{ fontSize: 17, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);`}
          />
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            <Image src={"https://media.giphy.com/media/9WXyFIDv2PyBq/giphy.gif"} />
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            Mmm....*drool*
          </Heading>
          <List>
            <ListItem>Virtual DOM</ListItem>
            <ListItem>Reuse components</ListItem>
            <ListItem>One-direction data flow (Not the band!)</ListItem>
            <ListItem>Open source</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>React/Redux DevTools</ListItem>
            <ListItem>Easy to learn <small>(Fo real bro!)</small></ListItem>
            <ListItem>11 Api functions <small>(It's tiny)</small></ListItem>
            <ListItem>I could go on but i'm not paid by the hour...</ListItem>
          </List>
          <Image src={images.aww.replace("/","")} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            Downsides?
          </Heading>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            <Image src={"https://media.giphy.com/media/wYyTHMm50f4Dm/giphy.gif"} />
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Don't hurt it!
          </Heading>
          <List>
            <ListItem>Wrapper hell</ListItem>
            <ListItem>High pace development</ListItem>
            <ListItem>Small</ListItem>
            <ListItem>Heavily NPM dependent</ListItem>
          </List>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            <Image src={images.reactalone.replace("/", "")} />
          </Text>
        </Slide>

        <Slide transition={["zoom"]}>
          <Image src={images.meme.replace("/", "")} />
        </Slide>

{/*ANGULAR2/7*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Angular 2-7<small> (But not 3)</small>
          </Heading>
          <CodePane
            style={{ fontSize: 17, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`import {
    Component
} from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>Hello World</h1>',
})
export class AppComponent {}`}
          />
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            <Image src={"https://media1.tenor.com/images/b1a4f5bb55fcba07aee9066b1a6a7e67/tenor.gif?itemid=4545856"} />
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            Are we really doing this?
          </Heading>
          <List>
            <ListItem>TypeScript</ListItem>
            <ListItem>Angular CLI</ListItem>
            <ListItem>Angular Material</ListItem>
            <ListItem>One and Two-way data binding</ListItem>
            <ListItem>Built in RxJS</ListItem>
          </List>
          <Image src={"https://media.giphy.com/media/PYFImn3jYw3dK/giphy.gif"} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            Please tell me it sucks....*praying*
          </Heading>
          <List>
            <ListItem>TypeScript</ListItem>
            <ListItem>Documentation</ListItem>
            <ListItem>IT'S HUGE!</ListItem>
          </List>
          <Image src={"https://media.giphy.com/media/l2JJzZfUZAHugzB6g/giphy.gif"} />
        </Slide>

{/*CONCLUSION*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            Conclusion
          </Heading>
          <Text>There's no God framework</Text>
          <Image src={"https://i.imgflip.com/1b9y1.jpg?a430536"} />
        </Slide>

{/*JAVASCRIPT*/}
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>It's all just Javascript</Quote>
            <Cite textColor="quarternary">Yes Henrik, we know its C in the end...bla...bla...bla</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]}>
          <Image src={images.vue.replace("/", "")} />
        </Slide>

      </Deck>
    );
  }
}