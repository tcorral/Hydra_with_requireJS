define(['hydra', '../../js/modules/other_module.js'], function (Hydra, Other) {
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