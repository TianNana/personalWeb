import { isProductionPlatform } from "./publicLet";

let logMixins = {
    methods: {
        consolelog(key='',value=''){
            if (this.$refs.log) {
                this.$refs.log.addLog({
                    key:key,
                    value:JSON.stringify(value)
                })
                console.log(key, value);
            }else if(!isProductionPlatform){
                console.log(key, value);
            }
        }
    },
}
export default logMixins