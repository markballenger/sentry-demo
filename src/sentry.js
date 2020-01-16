import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

//if ('production' === process.env.NODE_ENV) {
    const ravenOptions = {
        release: 'v1.1',
        environment: 'DEVELOPMENT'
    };


    const dsn = 'https://0df1befa85484b459abf7483ee3607a7@sentry.io/1882816';
    Raven.config(dsn, ravenOptions)
        .addPlugin(RavenVue, Vue)
        .install();

//}
