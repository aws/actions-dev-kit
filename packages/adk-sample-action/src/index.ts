import { runAction } from './action';
import { getActionInput, info, setFailed } from './utils/adkcore-util';
import { ValidationError } from './errors/validation-error';

export function main() {
    try {
        const endpoint: string = getActionInput('ENDPOINT');
        const cookie: string = getActionInput('COOKIE');
        const token: string = getActionInput('CSRF_TOKEN');
        const title: string = getActionInput('TITLE');
        const description: string = getActionInput('DESCRIPTION');

        runAction(endpoint, { cookie: cookie, csrfToken: token }, title, description)
            .then(function (data) {
                info(JSON.stringify(data));
            })
            .catch(function (error) {
                setFailed(new ValidationError('error occurs when running the action'));
            });
    } catch (error) {
        setFailed(error);
    }
}

if (require.main === module) {
    main();
}
