import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Slide from "react-reveal/Slide";
import { Icons } from "./Icons";

const CookieNotice = ({
  cookies,
  cookiePrefix,
  onSave,
  onInit,
  cookieOptions,
  toggleVisibility,
  legacyCookie,
  legacyCookieOptions,
}) => {
  const legacySuffix = "-legacy";

  const [options, setOptions] = useState({
    visible: false,
    showCookies: false,
    msg: "",
    init: false,
  });

  const [availableCookies, setAavailableCookies] = useState(cookies);

  useEffect(() => {
    // toggle visibity of cookie notice on toggleVisibility prop change
    setOptions((state) => ({
      ...state,
      visible: !state.visible,
    }));
  }, [toggleVisibility]);

  useEffect(() => {
    // execute effect only one time

    if (options.init === false) {
      const getCookie = (name) => {
        let cookieValue = Cookies.get(cookiePrefix + name, cookieOptions);
        if (cookieValue === undefined) {
          cookieValue = Cookies.get(
            cookiePrefix + name + legacySuffix,
            legacyCookieOptions
          );
        }
        return cookieValue;
      };

      // find default cookie
      const defaultCookie = availableCookies.filter(
        (cookie) => cookie.default === true
      );

      // check if default cookie is available
      if (defaultCookie.length > 0) {
        // get value of default cookie, if set. Only the first default cookie will be considered
        const cookieValue = getCookie(defaultCookie[0].name);

        if (cookieValue === undefined) {
          // show cookie notice if default cookie is not set
          setOptions((state) => ({
            ...state,
            visible: true,
          }));
        } else {
          // hide cookie notice if default cookie is set
          setOptions((state) => ({
            ...state,
            visible: false,
          }));

          setAavailableCookies((state) => {
            return state.map((value) => {
              value = { ...value, checked: getCookie(value.name) === "true" };
              return value;
            });
          });
        }

        setOptions((state) => ({
          ...state,
          init: true,
        }));

        // get current values from available cookies
        const availableCookiesOnInit = availableCookies.map((value) => {
          value = { ...value, checked: getCookie(value.name) === "true" };
          return value;
        });

        onInit(availableCookiesOnInit);
      } else {
        setOptions((state) => ({
          ...state,
          msg: "Missing default cookie. A default cookie is required.",
        }));
      }
    }
  }, [
    legacyCookieOptions,
    cookiePrefix,
    cookieOptions,
    availableCookies,
    onInit,
    options.init,
  ]);

  const setCookie = (name, value) => {
    Cookies.set(cookiePrefix + name, value, cookieOptions);

    if (legacyCookie === true) {
      Cookies.set(
        cookiePrefix + name + legacySuffix,
        value,
        legacyCookieOptions
      );
    }
  };
  const acceptAllCookies = () => {
    // set all cookies and mark all cookies as checked
    setAavailableCookies((state) => {
      const newAvailableCookies = state.map((value) => {
        setCookie(value.name, true);
        value = { ...value, checked: true };
        return value;
      });

      onSave(newAvailableCookies);

      return newAvailableCookies;
    });

    setOptions((state) => ({
      ...state,
      visible: false,
    }));
  };

  if (options.visible === false) {
    return null;
  }
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0`}
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="animate-wiggle inline-block align-bottom bg-black dark:bg-white rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <Slide top>
              <div className="flex flex-col">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-36 w-36">
                  <Icons
                    icons="logo"
                    className="fill-current text-black dark:text-white"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
                    id="modal-title"
                  >
                    Bienvenue chez Les Détritivores !
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-white">
                      Psst... Notre site est en cours de développement
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={() => {
                acceptAllCookies();
              }}
              className="transition mt-3 w-full inline-flex justify-center rounded-md border border-greenDDTV bg-greenDDTV hover:bg-green-800 dark:border-orangeDDTV shadow-sm px-4 py-2 dark:bg-orangeDDTV dark:hover:bg-orange-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenDDTV dark:focus:ring-orangeDDTV sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              &#128077;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CookieNotice.defaultProps = {
  preferencesButtonText: "Cookie preferences",
  savePreferencesButtonText: "Save cookie preferences",
  acceptAllButtonText: "Accept all cookies",
  cookies: [
    {
      name: "necessary",
      checked: true,
      editable: false,
      default: true,
      title: "Essential",
      text: "Essential cookies enable basic functions and are necessary for the proper function of the website. The website cannot function properly without these cookies.",
    },
    {
      name: "marketing",
      checked: false,
      editable: true,
      title: "Marketing",
      text: "Marketing cookies are used to track visitors across websites. They are used by third-party advertisers or publishers to display personalized ads.",
    },
  ],
  onSave: (cookies) => {},
  onInit: (cookies) => {},
  cookieOptions: { expires: 365 },
  toggleVisibility: true,
  legacyCookie: false,
  legacyCookieOptions: { expires: 365 },
  showCookiePreferences: true,
};

export default CookieNotice;
