import Executor from "../src-tool/Executor";

export default /*@__PURE__*/(function() {
  return {
    initialize: function() {
      Executor.initialize();
    },
    destroy: function() {
      Executor.destroy();
    }
  };
})();
