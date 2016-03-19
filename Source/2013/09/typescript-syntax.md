TypeScript Syntax
---

Declare variables

	var i:number = 1;
	var s:string = "text";

interface and class

	interface IPersion{
	  firtname: string;
	  lastname: string;
	}
	
	class Student implements IPersion{
	  firtname: string;
	  lastname: string;
	  
	  constructor(public name: string){
	    this.firstname = name;
	    this.lastname = "Student";
	  }
	  sayName()
	  {
	    return "Student";
	  }
	}
	
	class Teacher extends Student{
	  constructor()
	  {
	    super("Flash");
	    this.lastname = "Teacher";
	  }
	
	  sayName()
	  {
	    return "Teacher";
	  }
	}

static method

	class utils{
	  public static CopyProperties(source: any, target: any): void {
	    for (var prop in source) {
	      if (target[prop] !== undefined) {
	        target[prop] = source[prop];
	      }
	      else {
	        console.error("Cannot set undefined property: " + prop);
	      }
	    }
	  }
	}

	utils.CopyProperties(source, dest);

create module in math.ts

	module math{
	        export function MathAdd(a:number, b:number)
	        {
	                return a+b;
	        }
	}

use math module in test.ts

	/// <reference path="math.ts" />
	var c:number = math.MathAdd(1, 2);

create module in file1.ts

	export function MathAdd(a:number, b:number)
	{
	  return a+b;
	}

use file1 file module in test.ts

	import f1 = module('file1')
	var c:number = f1.MathAdd(1, 2);

