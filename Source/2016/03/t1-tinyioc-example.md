T1.TinyIoc Example
---

[T1.Scripts Nuget page 0.1.0.11](https://www.nuget.org/packages/T1.Scripts/)

The following code is using t1.TinyIoc example

	import t1 require("t1");
	class IMyKlass implements t1.IIocInterfaceChecker {
		className: string = "IMyKlass";
		test(): number {
			throw new Error("Not implement");
		}
	}

	class MyKlass extends IMyKlass {
		test(): number {
			return 123;
		}
	}

	t1.TinyIoc.registerType(IMyKlass, MyKlass);

	var obj: IMyKlass = Ioc.resolve(IMyKlass);
	var val = obj.test();
	expect(val).toBe(123);

If you need global instance

	t1.TinyIoc.registerInstance(IMyKlass, new MyKlass());

You can even

	t1.TinyIoc.registerLazy(IMyKlass, () => new MyKlass());

