import { Context } from "koa";

import { Container, Inject } from 'typescript-ioc'
import autobind from 'autobind-decorator'

@autobind
class ApiController {

    constructor() { }


    async test(ctx: Context) {
        // console.log(ctx.request.body);
        ctx.body = 'API TEST'
    }



}


//
export default Container.get(ApiController) as ApiController

