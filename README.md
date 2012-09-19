# jQuery RTL Scroll Type Detector

Horizontal scrollbar with rtl(right to left) language support have different implement in different browsers.

[scrollLeft][mdn-scrollleft] in rtl element is not defined by any spec or standards. So different browser have different implement.
As far as I know, there are 3 implements: WebKit, Firefox/Opera, IE. WebKit's implement is the most easy to use implement.

Exactly the same as ltr(left to right) element. Except the initial position of scrollbar controller is at most right position.

Firefox has a clearly define in their mdn document. The most right position stands for 0. And when user scrolls to left. The value decreases. The value is possible to be negative in this implement.

IE thought the element is flip horizontal. So the most right position is 0. And if it scrolls to left. The value increase.

A table is below to make these cases more clear.

## 3 Types of scrollLeft (scrollWidth = 100)

<table>
<thead>
<tr>
  <th>Browser</th>
  <th>Type</th>
  <th>Most Left</th>
  <th>Most Right</th>
  <th>Initial</th>
</tr>
</thead>
<tbody>
<tr>
  <td>WebKit</td>
  <td>default</td>
  <td>0</td>
  <td>100</td>
  <td>100</td>
</tr>
<tr>
  <td>Firefox/Opera</td>
  <td>negative</td>
  <td>-100</td>
  <td>0</td>
  <td>0</td>
</tr>
<tr>
  <td>IE</td>
  <td>reverse</td>
  <td>100</td>
  <td>0</td>
  <td>0</td>
</tr>
<tbody>
</table>

This plugin is used to detect which type is the browser are using. Assign the result to jQuery's support object named 'rtlScrollType'. You will need the scrollWidth of the element to transform between these three types of value

[mdn-scrollleft]:https://developer.mozilla.org/en-US/docs/DOM/element.scrollLeft

