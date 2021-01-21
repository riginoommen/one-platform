import JiraApi from 'jira-client';
const fetch = require('node-fetch');
import * as _ from 'lodash';

global.Headers = fetch.Headers;

class NotificationHelper {
    private static NotificationHelperInstance: NotificationHelper;
    constructor() { }
    public static NotificationHelper() {
        if (!NotificationHelper.NotificationHelperInstance) {
            NotificationHelper.NotificationHelperInstance = new NotificationHelper();
        }
        return NotificationHelper.NotificationHelperInstance;
    }

    public sendIssueEmail(data: any) {
        
    }
}

export const FeedbackIntegrationHelper = NotificationHelper.NotificationHelper();
