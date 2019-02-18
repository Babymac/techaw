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
  jssanta: require("../assets/jssanta.jpg"),
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

{/*        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Components are your main tool of abstraction</Quote>
            <Cite textColor="quarternary">Winston Churchill</Cite>
          </BlockQuote>
        </Slide>*/}

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
            <ListItem>Two-way data</ListItem>
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
            <ListItem>Two-way data</ListItem>
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
        <Slide transition={["zoom"]}>
          <Image src={images.jssanta.replace("/", "")} />
        </Slide>

      </Deck>
    );
  }
}