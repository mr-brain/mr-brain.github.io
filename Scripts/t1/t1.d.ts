declare module "t1" {
	export = t1;
}

declare module "collections" {
	export = collections;
}

declare namespace __VelocityComponent {
	class VelocityComponentState {
	}

	interface VelocityComponentProps extends React.Props<VelocityComponent> {
		animation: any;
		options: jquery.velocity.Options;
		runOnMount: boolean;
		targetQuerySelector: string;
	}

	class VelocityComponent extends React.Component<VelocityComponentProps, VelocityComponentState> {
	}
}

declare module "VelocityComponent" {
	export = __VelocityComponent;
}
