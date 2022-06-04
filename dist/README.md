# react-styless/scrollable

You can make your horizontal scroll box scrollable by mouse dragging.

### Installation

```
// with npm
$ npm install @react-styless/scrollable --save
```

### Usage

This is the basic usage of scrollable

```Javascript
import Scrollable from '@react-styless/scrollable';
const App = () => {
  return (
    <Scrollable>
      <div style={{width: 400, overflow: 'auto'}}>
        <div style={{width: 800, background: 'red'}}>child</div>
      </div>
    </Scrollable>
  );
}
```

| Attribute | Type               | Description |
| --------- | ------------------ | ----------- |
| children  | ReactNode          |             |
| vertical  | boolean, undefined |             |
