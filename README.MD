
<div align="center">
  <img src="https://themerkle.com/wp-content/uploads/Po.et_.png" style="display:inline-block; width : 140px;">
 
  <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/full/angularjs.png" style="display:inline-block; width : 140px;">
  <br><br>
</div>

-----------------

## Installation

To install this library, run:

```bash
$ npm install ng2-poet --save
```

### Import

```javascript
import { FrostService } from 'ng2-poet'
//Import models from the models folder
```

### Methodes

You need an Api token to add work to the poet network.

Get a Api token via direct register https://frost.po.et or use the methode below

```javascript
CreateAccount(account: Account)
```

You can set a token firstly to avoid recalls on every methode

```javascript
setToken(token: string)
```

Create a work

```javascript
CreateWork(work: WorkAttributes, token(optional))
```

Get a single work by workId

```javascript
 GetWork(workId: string, token(optional))
```

Get all works of your api Token

```javascript
GetWorks(token(optional))
```


## License

MIT © [Nokol.net](mailto:admin@nokol.net)
