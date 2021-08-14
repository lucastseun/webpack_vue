import JSEncrypt from 'jsencrypt'

const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDyKhVoYHD5g3XJMG9x+qO3tVws
oPalUG5RqZJfD8QXMUbzUfn2Wh4AfEB6mVy5OP4Ip2GJji5Oj0wycR/z3jGmDpck
GeiT3YRswiPc5yTTNG1K39v4C8Ka2uF4jL6+OlQDwfe0XYKTNnobLFKWnJ3Q0i45
EPoExpqlJkaNAdEezQIDAQAB
-----END RSA PUBLIC KEY-----`

const encrypt  = new JSEncrypt()

encrypt.setPublicKey(publicKey)

const rsaEncrypt = (data = '') => encrypt.encrypt(data)

export default rsaEncrypt