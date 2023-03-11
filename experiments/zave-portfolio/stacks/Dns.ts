import { StackContext } from 'sst/constructs';
import * as route53 from 'aws-cdk-lib/aws-route53';


export const Dns = ({ stack, app }: StackContext) => {

    let hostedZone: route53.IHostedZone | undefined;

    if (app.stage === 'prod') {
        hostedZone = new route53.PublicHostedZone(
            stack,
            `whois.jsondoe.com-hostedzone`,
            { zoneName: `whois.jsondoe.com` },
        );
    }


    return { hostedZone }
};
