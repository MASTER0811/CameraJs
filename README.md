# Camera Api

## Getting Started
Insert this `script` tag
```html
<script src='https://cdn.jsdelivr.net/gh/MASTER0811/CameraJs/main.js'></script>
```
add `camera_start()`


### Add script, Exp:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Camera Api</title>
</head>
<body>
    <script src='https://cdn.jsdelivr.net/gh/MASTER0811/CameraJs/main.js'></script>
    <script>
        camera_start()
    </script>
</body>
</html>
```


### You also can edit camera style
##### Fullscreen camera
###### Code Here: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Camera Api</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    video{
        right: 0;
        position: absolute;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        width:auto;
        height: auto;
    }
</style>
<body>
    <script src='https://cdn.jsdelivr.net/gh/MASTER0811/CameraJs/main.js'></script>
    <script>
        camera_start()
    </script>
</body>
</html>
```
