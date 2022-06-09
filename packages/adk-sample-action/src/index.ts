import { runAction } from './action';
import { getActionInput, info, setFailed } from './utils/adkcore-util';

export function main() {
    try {
        const endpoint: string = getActionInput('ENDPOINT');
        const cookie: string = getActionInput('COOKIE');
        const token: string = getActionInput('CSRF_TOKEN');
        const title: string = getActionInput('TITLE');
        const description: string = getActionInput('DESCRIPTION');

        runAction(endpoint, { cookie: cookie, csrfToken: token }, title, description)
            .then(function (data) {
                console.log(data);
                info(JSON.stringify(data));
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
}

if (require.main === module) {
    main();
}
