Angular 2 library to interact with Po.et ' s Frost API 

---
<div align="center">
  <img src="https://themerkle.com/wp-content/uploads/Po.et_.png"  width="140" style="display:inline-block;">
 
  <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/full/angularjs.png" width="140" style="display:inline-block;">
  <br><br>
</div>

-----------------

## Installation

To install this library, run:

```bash
$ npm install ng2-poet --save
```

### Import
Import PoetModule for usage and inject the FrostService
```javascript
import { PoetModule, FrostService} from 'ng2-poet'


@NgModule({
  imports: [
    PoetModule
  ],
  providers: [FrostService],
})
```


There are also available models :

```javascript
import { WorkAttributes, Work, Account, Profile} from 'ng2-poet'
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
