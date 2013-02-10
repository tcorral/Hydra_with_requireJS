require.config({
    paths:{
        hydra:'libs/hydra'
    }
});
define(['hydra', 'modules/module'], function (Hydra) {
    console.log(Hydra.version);
});