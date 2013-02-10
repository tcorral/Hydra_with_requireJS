define(['hydra', 'libs/modules/other_module'], function (Hydra, Other) {
    Other.start();
    Mod = Hydra.module.register('module', function (bus) {
        return {
            init:function () {
                bus.publish('channel', 'item:action', {});
                console.log('module started');
            }
        };
    });
    Mod.start();
});