(() => {
    const app_date_setting = new Date();
    app_date_setting.setDate(31);
    app_date_setting.setMonth(10);
    app_date_setting.setFullYear(2025);
    window['app_date_setting'] = app_date_setting;
})();