#  Chattaaar

Chattaaar is a multi-page form generator designed to create kick-ass, humanised forms. Inspired by iOS Messages, each question solicits information from the user by treating the process as a conversation, keeping them engaged and moving through your form.

## Getting Started

### 1 - Include Chattaaar after jQuery

```html
<script src="vendor/jquery.min.js"></script>
<script src="vendor/chattaaar.min.js"></script>
```

### 2 - Add the form to your page

```html
<form class="chattaaar-container"></form>
```

### 3 - Define stages
An example dictionary of stages:

```js
var myStages = {
  stage1: {
    title: 'About You',
    type: 'input',
    inputName: 'name',
    question: "What's your name?",
    placeholder: "e.g. Joe Bloggs"
  },
  stage2: {
    title: 'First Impressions',
    type: 'radio',
    inputName: 'first_impressions',
    question: "Right, let's get going <span class='ch-name'></span>. What are your first impressions of Chattaaar?",
    options: ['Wowza!', "Pretty swish", 'Okay', 'Could be better', "I don't like it"]
  },
  stage3: {
    title: 'Rate the Rating',
    type: 'rating',
    inputName: 'rating',
    question: "Thanks for being honest. Next up, rate the aesthetic of this ratings widget.",
    skippable: true
  },...
}
```

### 4 - Create a server side mail function

```php
<?php
$name = $_POST['name'];
$email = $_POST['email'];
...

$to = "your@address.com";
$subject = "Message from $name";
$body = "Name: $name \n\n Message: \n $message...";
$from = $email;
$headers = "From:" . $from;
mail($to,$subject,$body,$headers);
echo "sent";
?>
```

### 5 - Define form options
An example dictionary of options:

```js
var myOptions = {
  formName: 'formName',
  formAction: 'path/to/my-server-side-mail-action.php',
  theme: 'formTheme',
  welcomeText: "What do you think of Chattaaar?",
  welcomeStrapline: "Have a play and submit your thoughts.",
  welcomeImage: '/img/chattaaar-logo.png',
  welcomeImageHeight: '48px',
  welcomeImageWidth: '150px',
  yourName: 'Will',
  yourAvatar: '/img/myavatar.png'
}
```

### 6 - Init Chattaaar
```js
$(document).ready(function() {
  $('.chattaaar-container').newChattaaar(
    options = myOptions,
    stages = myStages
  );
});
```