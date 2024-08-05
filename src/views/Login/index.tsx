import { defineComponent, onMounted, ref, onBeforeMount } from "vue";
import { scaleContainer } from "@/utils/utils";
import { ElInput, ElButton } from 'element-plus';
import { useRouter } from "vue-router";

import "./style.less";

export default defineComponent(() => {

  const password = ref('');
  const router = useRouter();

  onBeforeMount(() => {
    router.push({ path: '/Home' });
  })

  onMounted(() => {
    scaleContainer(".container");
    window.onresize = () => {
      scaleContainer(".container");
    };
  });

  return () => {
    return (
      <div class="login-page">
        <div class="container">
          <div style="transform: scale(2)">
            <ElInput
              v-model={password.value}
              style="width: 240px"
              type="password"
              placeholder="请输入密码"
              show-password
            />
            <ElButton
              type="primary"
              onClick={() => {
                if (password.value === '132511') {
                  localStorage.setItem('test_password', '132511')
                  router.push({ path: 'Home' });
                } else {
                  alert('密码错误')
                }
              }}
            >登录</ElButton>
          </div>
        </div>
      </div>
    );
  };
});
