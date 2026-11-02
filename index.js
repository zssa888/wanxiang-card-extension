import '@owlbear-rodeo/sdk';

// 启动的时候，在OBR动作栏添加按钮
owlbear.addAction({
  name: "万象牌抽卡",
  icon: "🃏",
  onClick: () => {
    const url = "https://4mae4bxtu6j83.doubao.link/app/app_17gvw9rqzdm";
    window.open(url, "_blank", "width=1000,height=700");
  }
});
