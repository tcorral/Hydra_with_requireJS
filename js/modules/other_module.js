define(['hydra'], function (Hydra) {
    return Hydra.module.register('other', function (bus) {
        return {
            init:function () {
                bus.subscribeTo('channel', 'item:action', function () {
                    console.log('other started');
                }, this);
                console.log('other module started');
            }
        };
    });
});