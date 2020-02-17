# jQuery RTL Scroll Type Detector

Horizontal scrollbar with RTL(right to left) language support has different 
implementations in different browsers.

[scrollLeft][mdn-scrollleft] in RTL element is <del>not defined by any spec or 
standards</del>. So different browsers have different implementations. As far as I 
know, there are three implements: Chrome(Blink), Firefox/Safari, IE.

Chrome's RTL scrollbar is the same as LTR(left to right) element. Except for 
the initial position of the scrollbar controller is at the most right position.

Firefox has a clear definition in its MDN document. The most right position 
stands for 0. And when the user scrolls to the left. The value decreases. The 
value is possible to be negative in this implement.

IE thought the element is flip horizontal. So the most right position is 0. 
And if it scrolls to the left. Value increases.

A table is below to show these types more clear.

This plugin is designed to detect which type is the browser is using. Assign 
the result to jQuery's support object named **rtlScrollType**. You will need 
the scrollWidth of the element to transform between these three types of value.

[mdn-scrollleft]:https://developer.mozilla.org/en-US/docs/DOM/element.scrollLeft

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
  <td>Chrome/Opera(Blink)/Edge(Blink)</td>
  <td>default</td>
  <td>0</td>
  <td>100</td>
  <td>100</td>
</tr>
<tr>
  <td><a href="https://drafts.csswg.org/cssom-view/#dom-window-scroll">Standard</a>/Firefox/Safari/Opera(Presto)</td>
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

## Usage

See [demo][].

[demo]:https://github.com/othree/jquery.rtl-scroll-type/blob/master/demo/look.html

## Web Standard

It's defined in [CSSOM View Module][CSSOMVM]. The **negative** type is the 
chosen one. Chrome has a [plan][chplan] to change its behavior. More 
information is at [#6][].

[CSSOMVM]:https://drafts.csswg.org/cssom-view/
[chplan]:https://www.chromestatus.com/feature/5759578031521792
[#6]:https://github.com/othree/jquery.rtl-scroll-type/issues/6

## License

Copyright (c) 2012 Wei-Ko Kao

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

