export class ReqErr extends Error {
	constructor(
		public code: number,
		public message: string,
	) {
		super();
		this.code = code;
		this.message = message;
	}
}

export class ReqSucc {
	constructor(
		public code: number,
		public data: object | null,
	) {
		this.code = code;
		this.data = data;
	}
}
