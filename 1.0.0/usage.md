# WebJS SDK Usage

Code:

```html
<script src="https://cdn.jsdelivr.net/gh/C1200/WebJS-SDK/1.0.0/webjssdk.js"></script>
```

Code (min):

```html
<script src="https://cdn.jsdelivr.net/gh/C1200/WebJS-SDK/1.0.0/webjssdk.min.js"></script>
```

## Better Dialogs

### betterdialogs_prompt(message, _default, callback)

Parameters:

message: String

> Prompt Message

_default: String

> Default value of text box

callback: Function

> Called when user has done something

Callback Value:

Null: When prompt exited

String: When user has clicked "OK" or has pressed the Enter key

### betterdialogs_alert(message)

Parameters:

message: String

> Prompt Message

Callback Value:

*No callback*

### betterdialogs_confirm(message, callback)

Parameters:

message: String

> Prompt Message

callback: Function

> Called when user has done something

Callback Value:

Boolean (true): When user has clicked "OK"

Boolean (false): When user has clicked "Cancel" or "X"