/*变量缓存器，方便在不同的类中访问变量，全局只有一个单例*/

export class Store {
	
	static getInstance(){
		if(!Store.instance){
			Store.instance = new Store();
		}
		return Store.instance;
	}
	
	constructor(){
		this.map= new Map();
	}
	
  put(key,value){
		if(typeof value === "function"){
			value =new value();
		}
		this.map.set(key,value);
		return this;
	}
	
	get(key){
		return this.map.get(key)
	}
	
	destory(){
		for(let key of this.map.keys()){
			this.map.set(key,null);
		}
	}
	
}


