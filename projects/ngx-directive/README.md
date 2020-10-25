@vlah.io/ngx-directive

Set of handy Angular directives.

### Usage (code example)

```
<table class="table table-bordered k-t-r">
  <tbody>
    <tr>
      <td vlahioIfNoContent></td>
      <td [vlahioIfNoContent]="'No content!'"></td>
      <td vlahioOnOff></td>
      <td [vlahioOnOff]="true"></td>
      <td [vlahioOnOff]="true" [align]="'center'"></td>
      <td vlahioStatusCircle></td>
      <td [vlahioStatusCircle]="true"></td>
      <td [vlahioStatusCircle]="true" [align]="'center'"></td>
      <td vlahioTrueFalse></td>
      <td [vlahioTrueFalse]="true"></td>
      <td [vlahioTrueFalse]="true" [align]="'center'"></td>
    </tr>
  </tbody>
</table>
```

### CSS styles
```
  @import "../../ngx-directive/src/assets/css/ngx-directive.css";
```

For more details read [here](https://@vlah.iogithub.com/vlah-io/ngx-directive/blob/master/INSTALLATION.md).
