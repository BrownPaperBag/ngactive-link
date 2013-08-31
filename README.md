ngactive-link
=========

Bower-ified active link directive from this SO answer: http://stackoverflow.com/a/12631074/187954

This markup served on `/angular`:

```HTML
<div ng-app="link">
  <a href="/angular" active>Angular</a>
  <a href="/is" active>is</a>
  <a href="/here" active="some-custom-class">here</a>
</div>
```

Renders: 

```HTML
<div ng-app="link">
  <a href="/angular" class="active">Angular</a>
  <a href="/is">is</a>
  <a href="/here">here</a>
</div>
```
