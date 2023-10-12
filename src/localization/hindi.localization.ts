import Localization from "./types/localization.type";

const hindi: Localization = {
  header: {
    signIn: "साइन इन",
    run: "रन",
    projectName: {
      alert: "प्रोजेक्ट का नाम बदल दिया गया"
    }
  },
  form: {
    signIn: "साइन इन",
    signUp: "साइन अप",
    signInBtn: "साइन इन",
    signUpBtn: "साइन अप",
    username: "उपयोगकर्ता नाम",
    password: "पासवर्ड",
    email: "ईमेल",
    errors: {
      emptyPassword: "पासवर्ड खाली नहीं हो सकता",
      invalidPassword: "कम से कम 6 वर्ण",
      emptyEmail: "ई-मेल खाली नहीं हो सकता",
      invalidEmail: "अमान्य ईमेल",
      emptyUsername: "उपयोक्तानाम खाली नहीं हो सकता",
      invalidUsername: "कम से कम 2 अक्षर"
    }
  },
  tooltips: {
    sidebar: {
      share: "शेयर करना",
      settings: "सेटिंग्स"
    },
    header: {
      projectName: {
        edit: "नाम संपादित करें",
        save: "सहेजे"
      },
      profile: {
        navButton: "खाता",
        menu: {
          profile: "प्रोफ़ाइल",
          logout: "लॉग आउट"
        }
      }
    }
  },
  sidebar: {
    share: {
      title: "प्रोजेक्ट साझा करें",
      label: "साझा करने योग्य लिंक",
      button: "प्रतिलिपि",
      alert: "लिंक कॉपी किया गया"
    },
    settings: {
      title: "सेटिंग्स",
      general: {
        title: "सामान्य",
        lightTheme: "लाइट थीम",
        language: "भाषा",
        layout: {
          title: "लेआउट",
          values: {
            vertical: "खड़ी",
            horizontal: "क्षैतिज"
          }
        }
      },
      editor: {
        title: "संपादक",
        autorun: "ऑटोरन",
        fontSize: {
          title: "फ़ॉन्ट आकार",
          values: {
            small: "छोटा",
            normal: "सामान्य",
            large: "बड़ा",
            huge: "विशाल"
          }
        },
        indentSize: {
          title: "इंडेंट आकार"
        },
        indentType: {
          title: "इंडेंट प्रकार",
          values: {
            spaces: "खाली स्थान",
            tabs: "टैब"
          }
        }
      }
    }
  },
  console: {
    title: "कंसोल",
    clear: "साफ"
  }
};

export default hindi;
