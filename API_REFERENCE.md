# Functions

<dl>
<dt><a href="#formattedDate">formattedDate(fromDateLuxon, returnFormatLuxon, returnAsInt)</a> ⇒ <code>number</code> | <code>string</code></dt>
<dd><p>Get formatted date from Luxon DateTime</p>
</dd>
<dt><a href="#formattedDateNow">formattedDateNow(returnFormatLuxon, returnAsInt)</a> ⇒ <code>number</code> | <code>string</code></dt>
<dd><p>Get a formatted date</p>
</dd>
<dt><a href="#formattedDateWithinFromNow">formattedDateWithinFromNow(withinStart, withinEnd, withinUnit, returnFormatLuxon, returnAsInt)</a> ⇒ <code>number</code> | <code>string</code></dt>
<dd><p>Get a formatted random date within the selected time period.</p>
</dd>
<dt><a href="#fontId">fontId()</a> ⇒ <code>string</code></dt>
<dd><p>get a random font id string</p>
</dd>
</dl>

<a name="formattedDate"></a>

# formattedDate(fromDateLuxon, returnFormatLuxon, returnAsInt) ⇒ <code>number</code> \| <code>string</code>
Get formatted date from Luxon DateTime

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fromDateLuxon | <code>DateTime</code> |  | Date to format |
| returnFormatLuxon | <code>string</code> |  | Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd' |
| returnAsInt | <code>boolean</code> | <code>false</code> | Return value as an integer. |

<a name="formattedDateNow"></a>

# formattedDateNow(returnFormatLuxon, returnAsInt) ⇒ <code>number</code> \| <code>string</code>
Get a formatted date

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| returnFormatLuxon | <code>string</code> |  | Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd' |
| returnAsInt | <code>boolean</code> | <code>false</code> | Return value as an integer. |

<a name="formattedDateWithinFromNow"></a>

# formattedDateWithinFromNow(withinStart, withinEnd, withinUnit, returnFormatLuxon, returnAsInt) ⇒ <code>number</code> \| <code>string</code>
Get a formatted random date within the selected time period.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| withinStart | <code>number</code> |  | Start value, can be negative. For example -12 |
| withinEnd | <code>number</code> |  | End value, can be negative. For example 13 |
| withinUnit | <code>TimeUnits</code> |  | Unit for the values. For example 'h' |
| returnFormatLuxon | <code>string</code> |  | Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd' |
| returnAsInt | <code>boolean</code> | <code>false</code> | Return value as an integer. |

**Example**  
```js
//returns for example 2023-02-13 or 2023-02-18 when called on 2023-02-14
formattedDateWithinFromNow(-2,5, "d", "yyyy-MM-dd")
```
<a name="fontId"></a>

# fontId() ⇒ <code>string</code>
get a random font id string

**Kind**: global function  
