const router = require('express').Router()
const requireDir = require('require-dir')
const ctrls = requireDir('../controllers')

// router.post('/signup', ctrls.auth.signup);
router.post('/org/signup', ctrls.auth.orgsignup);

// 用户登陆
router.post('/login', ctrls.auth.login);
// 获取验证码
router.get('/get/verifyCode', ctrls.user.genVerifyCode);
// 校验验证码
router.get('/check/verifyCode', ctrls.user.checkVerifyCode);
// 获取机构列表
router.post('/get/org/list', ctrls.admin.fetchOrgList);
// 新增用户
router.post('/signup', ctrls.admin.newUser);

module.exports = router;
