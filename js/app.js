require.config({
    paths:{
        hydra:'libs/hydra'
    }
});
define(['hydra', 'libs/modules/module'], function (Hydra) {
    console.log(Hydra.version);
});