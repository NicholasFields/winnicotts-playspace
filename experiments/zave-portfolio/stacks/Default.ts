import { StackContext, NextjsSite, use } from 'sst/constructs';
import { Dns } from './Dns';

export function Default({ stack, app }: StackContext) {
	const { hostedZone } = use(Dns);

	const customDomain = app.stage === 'prod' ? {
		domainName: hostedZone?.zoneName as string,
		domainAlias: `www.${hostedZone?.zoneName}`,
	} : undefined;

	const site = new NextjsSite(stack, 'site', {
		path: 'packages/next',
		customDomain,
	});

	stack.addOutputs({
		ApiEndpoint: site.url || 'http://localhost:3000',
	});
}

