import Http from "./http";
class Test extends Http{
    // static  async getUser(url){
    //     try{
    //         const res = await this.get(url)
    //     return res;
    //     }
    //     catch{
    //         console.error(`${error.message}`);

    //     }
        
    // }
    static async postUser(url,body){
        try{
            const res = await this.post(url,body)
        return res;
        }
        catch{
            console.error(`${error.message}`);

        }
    }
}
export default Test