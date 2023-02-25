const verificationTemplate = ({
	title,
	topLogoURL,
	bottomLogoURL,
	verificationLink,
	unsubscribeLink,
}) => {
	return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>

  <!--[if gte mso 9
    ]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif
    ]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso
    ]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif
    ]-->

    <!-- Your title goes here -->
    <title>${title}</title>
    <!-- End title -->

    <!-- Start stylesheet -->
    <style type="text/css">
      a,a[href
    ],a:hover, a:link, a:visited {
        /* This is the link colour */
        text-decoration: none!important;
        color: #0000EE;
    }
      .link {
        text-decoration: underline!important;
    }
      p, p:visited {
        /* Fallback paragraph style */
        font-size: 15px;
        line-height: 24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight: 300;
        text-decoration:none;
        color: #000000;
    }
      h1 {
        /* Fallback heading style */
        font-size: 22px;
        line-height: 24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:normal;
        text-decoration:none;
        color: #000000;
    }
      .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;
    }
      .ExternalClass {width: 100%;
    }
    </style>
    <!-- End stylesheet -->

</head>

  <!-- You can change background colour here -->
  <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
  
  <!-- Fallback force center content -->
  <div style="text-align: center;">

    <!-- Email not displaying correctly -->
    <!--
    <table align="center" style="text-align: center; vertical-align: middle; width: 600px; max-width: 600px;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: middle;" width="596">

            <p style="font-size: 11px; line-height: 20px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #000000;">Is this email not displaying correctly? <a class="link" style="text-decoration: underline;" target="_blank" href="https://fullsphere.co.uk/html-emails/free-template/"><u>Click here</u></a> to view in browser</p>

          </td>
        </tr>
      </tbody>
    </table>
    -->
    <!-- Email not displaying correctly -->
    
    <!-- Start container for logo -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">

            <!-- Your logo is here -->
            <img style="width: 180px; max-width: 180px; height: 85px; max-height: 85px; text-align: center; color: #ffffff;" alt="Logo" src="${bottomLogoURL}" align="center" width="180" height="85">

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Start single column section -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 10px; padding-bottom: 40px;" width="596">

              <h1 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">Click to verify your email</h1>

                <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293; text-align: left">
Hi Joshua Goon,
      </br>
To activate your Lifespring Account, please verify your email address.
Your account will not be created until your email address is confirmed.</p>   

              <!-- Start button (You can change the background colour by the hex code below) -->
              <a href="${verificationLink}" target="_blank" style="background-color: #000000; font-size: 15px; line-height: 22px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; padding: 12px 15px; color: #ffffff; border-radius: 5px; display: inline-block; mso-padding-alt: 0; min-width: 60px">
                  <!--[if mso
    ]>
                  <i style="letter-spacing: 25px; mso-font-width: -100%; mso-text-raise: 30pt;">&nbsp;</i>
                <![endif
    ]-->

                  <span style="mso-text-raise: 15pt; color: #ffffff;">Verify</span>
                  <!--[if mso
    ]>
                  <i style="letter-spacing: 25px; mso-font-width: -100%;">&nbsp;</i>
                <![endif
    ]-->
              </a>
              <!-- End button here -->
              
              <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293; text-align: left">If this request is not submitted by you, don't worry, Whoever submitted it cannot access your account without this code. To ensure the security of your account, it's recommended to change the password for your account.</p>   
      <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293; text-align: left">Or, copy and paste the following URL into your browser:</br>${verificationLink}</p>

            </td>
          </tr>
        </tbody>
      </table>
      <!-- End single column section -->
      
 

      <!-- Start footer -->
      <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">

              <!-- Your inverted logo is here -->
              <img style="width: 180px; max-width: 180px; height: 85px; max-height: 85px; text-align: center; color: #ffffff;" alt="Logo" src="${topLogoURL}" align="center" width="180" height="85">

              <p style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                <a target="_blank" style="text-decoration: underline; color: #ffffff;" href="https://livespring.tech">
                  livespring.tech
                </a>
              </p>
              <p style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                <a style="text-decoration: underline; color: white;" href="${unsubscribeLink}"><u>Unsubscribe</u></a>

              </p>

            </td>
          </tr>
        </tbody>
      </table>
      <!-- End footer -->
  
  </div>

  </body>

</html>`;
};

const verificationTemplateTextFallback = ({ verificationLink }) => {
	return `Click or paste this url in your browser to authenticate your account.
    ${verificationLink}
    If this request is not submitted by you, don't worry, Whoever submitted it cannot access your account without this code. To ensure the security of your account, it's recommended to change the password for your account.`;
};

export { verificationTemplate, verificationTemplateTextFallback };
