const RootComponent = {
    name: 'AdOn Signature',
    data() {
        return {
            sigName: 'Your name',
            sigPosition: 'Your position',
            sigPhone: '07 5586 1400',
            sigMobile: '0401 736 730',
            tableStyle: 'width: 650px; height: 170px; font-family: sans-serif; background: url(https://adondevelopment.com/clients/2021_sig_directory/images/background.png); background-repeat: no-repeat; padding: 10px; background-size: cover; color: #fff; border-radius: 10px; margin: 0;',
            buttonText: 'Generate Signature',
            isShowOpt1: true,
            isShowOpt2: false,
            isShowOpt3: false
        }
    },
    methods: {
        showFormOpt1() {
            var fls = false
            this.isShowOpt1 = true
            this.isShowOpt2 = fls
            this.isShowOpt3 = fls
        },
        showFormOpt2() {
            var fls = false
            this.isShowOpt1 = fls
            this.isShowOpt2 = true
            this.isShowOpt3 = fls
        },
        showFormOpt3() {
            var fls = false
            this.isShowOpt1 = fls
            this.isShowOpt2 = fls
            this.isShowOpt3 = true
        },
        getData(){
            const sigName = document.getElementById('signame').value;
            const sigPosition = document.getElementById('sigposition').value;
            const sigPhone = document.getElementById('sigphone').value;
            var openSig = window.open('', '', 'fullscreen=yes,menubar=yes');
            openSig.document.write("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/><title>Ad On Group - Digital Marketing Specialists</title></head><body><table border='0' cellspacing='0' cellpadding='5' style='border-collapse: collapse; background: url(https://adondevelopment.com/clients/2021_sig_directory/images/background.png); background-repeat: no-repeat; background-size: cover; border-radius: 15px; color: white; font-family: sans-serif; width: 650px; line-height:0px;font-size:1px;padding:0px;border-spacing:0px;margin:0px; text-decoration: none;'><tr style='margin-bottom: -10px;'><td width='150px'><img style='width: 150px; height: auto;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AOG-logo_white.png' alt=''></td><td><table width='100%' height='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse: collapse; margin-left: 10px; margin-top: 20px;'><tr><td><strong style='font-size: 15px;'>"+sigName+"</strong></td></tr><tr><td><p style='font-size: 12px;'>"+sigPosition+"</p></td></tr><tr><td><p style='line-height: 1.2; font-size: 10px;'><a style='text-decoration: none; color: white;' href='tel:"+sigPhone+"'><img style='width: 10px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-01.png' alt='phone'> <span style='font-size: 12px;'>&nbsp "+sigPhone+"</span></a><br><a style='text-decoration: none; color: white;' href='https://www.adongroup.com.au'><img style='width: 10px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-02.png' alt='internet'> <span style='font-size: 12px;'>&nbsp www.adongroup.com.au</span></a></p></td></tr></table></td><td width='250px'><img style='width: 250px; height: auto; float: right;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AdOn-logo-and-partners-higher-res-updated-v2.gif' alt='Partner'></td></tr><tr><td colspan='3' style='line-height: 1.2; font-size: 8px;'><p style='font-size: 6px; padding-left: 12px; padding-right: 12px; padding-bottom: 10px;'>This email, its contents and any attachments are strictly confidential. They must not be used, distributed, copied or read by any person other than the addressee. Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this email by anyone other than the addressee may be unlawful. If you have received this email and attachments in error please contact us at Ad on Group immediately to facilitate its return.</p></td></tr></table></body></html>")
        },
        getData2(){
            const sigName = document.getElementById('signame2').value;
            const sigPosition = document.getElementById('sigposition2').value;
            const sigPhone = document.getElementById('sigphone2').value;
            const sigMobile = document.getElementById('sigmobile2').value;
            var openSig = window.open('', '', 'fullscreen=yes');
            openSig.document.write("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/><title>Ad On Group - Digital Marketing Specialists</title></head><body><table border='0' cellspacing='0' cellpadding='5' style='border-collapse: collapse; background: url(https://adondevelopment.com/clients/2021_sig_directory/images/background.png); background-repeat: no-repeat; background-size: cover; border-radius: 15px; color: white; font-family: sans-serif; width: 650px; line-height:0px;font-size:1px;padding:0px;border-spacing:0px;margin:0px; text-decoration: none;'><tr style='margin-bottom: -10px;'><td width='150px'><img style='width: 150px; height: auto;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AOG-logo_white.png' alt=''></td><td><table width='100%' height='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse: collapse; margin-left: 10px; margin-top: 20px;'><tr><td><strong style='font-size: 15px;'>"+sigName+"</strong></td></tr><tr><td><p style='font-size: 12px;'>"+sigPosition+"</p></td></tr><tr><td><p style='line-height: 1.2; font-size: 10px;'><a style='text-decoration: none; color: white;' href='tel:"+sigPhone+"'><img style='width: 10px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-01.png' alt='phone'> <span style='font-size: 12px;'>&nbsp "+sigPhone+"</span></a><br><a style='text-decoration: none; color: white;' href='tel:"+sigMobile+"'><img style='width: 10px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-mobile-01.png' alt='phone'> <span style='font-size: 12px;'>&nbsp "+sigMobile+"</span></a><br><a style='text-decoration: none; color: white;' href='https://www.adongroup.com.au'><img style='width: 10px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-02.png' alt='internet'> <span style='font-size: 12px;'>&nbsp www.adongroup.com.au</span></a></p></td></tr></table></td><td width='250px'><img style='width: 250px; height: auto; float: right;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AdOn-logo-and-partners-higher-res-updated-v2.gif' alt='Partner'></td></tr><tr><td colspan='3' style='line-height: 1.2; font-size: 8px;'><p style='font-size: 6px; padding-left: 12px; padding-right: 12px; padding-bottom: 10px;'>This email, its contents and any attachments are strictly confidential. They must not be used, distributed, copied or read by any person other than the addressee. Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this email by anyone other than the addressee may be unlawful. If you have received this email and attachments in error please contact us at Ad on Group immediately to facilitate its return.</p></td></tr></table></body></html>")
        },
        getData3(){
            const sigName = document.getElementById('signame3').value;
            const sigPosition = document.getElementById('sigposition3').value;
            const sigMobile = document.getElementById('sigmobile3').value;
            var openSig = window.open('', '', 'fullscreen=yes');
            openSig.document.write("<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/><title>Ad On Group - Digital Marketing Specialists</title></head><body><table border='0' cellspacing='0' cellpadding='5' style='border-collapse: collapse; background: url(https://adondevelopment.com/clients/2021_sig_directory/images/background.png); background-repeat: no-repeat; background-size: cover; border-radius: 15px; color: white; font-family: sans-serif; width: 650px; line-height:0px;font-size:1px;padding:0px;border-spacing:0px;margin:0px; text-decoration: none;'><tr style='margin-bottom: -10px;'><td width='150px'><img style='width: 150px; height: auto;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AOG-logo_white.png' alt=''></td><td><table width='100%' height='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse: collapse; margin-left: 10px; margin-top: 20px;'><tr><td><strong style='font-size: 15px;'>"+sigName+"</strong></td></tr><tr><td><p style='font-size: 12px;'>"+sigPosition+"</p></td></tr><tr><td><p style='line-height: 1.2; font-size: 10px;'><a style='text-decoration: none; color: white;' href='tel:"+sigMobile+"'><img style='width: 10px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-mobile-01.png' alt='phone'> <span style='font-size: 12px;'>&nbsp "+sigMobile+"</span></a><br><a style='text-decoration: none; color: white;' href='https://www.adongroup.com.au'><img style='width: 10px; align-items: center;' src='https://adondevelopment.com/clients/2021_sig_directory/images/icon-02.png' alt='internet'> <span style='font-size: 12px;'>&nbsp www.adongroup.com.au</span></a></p></td></tr></table></td><td width='250px'><img style='width: 250px; height: auto; float: right;' src='https://adondevelopment.com/clients/2021_sig_directory/images/AdOn-logo-and-partners-higher-res-updated-v2.gif' alt='Partner'></td></tr><tr><td colspan='3' style='line-height: 1.2; font-size: 8px;'><p style='font-size: 6px; padding-left: 12px; padding-right: 12px; padding-bottom: 10px;'>This email, its contents and any attachments are strictly confidential. They must not be used, distributed, copied or read by any person other than the addressee. Unauthorised use, disclosure, copying or reliance on the contents of and attachments to this email by anyone other than the addressee may be unlawful. If you have received this email and attachments in error please contact us at Ad on Group immediately to facilitate its return.</p></td></tr></table></body></html>")
        }
    }
}

const app = Vue.createApp(RootComponent).mount('#app');