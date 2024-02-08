// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6LDjbsgudJz1tuVKWvrSoq

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";
import { WordpressProvider } from "@plasmicpkgs/plasmic-wordpress";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
  wordpressProviderProps?: Partial<
    Omit<React.ComponentProps<typeof WordpressProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    antdConfigProviderProps,
    cmsCredentialsProviderProps,
    wordpressProviderProps
  } = props;

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#1677ff"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      <CmsCredentialsProvider
        {...cmsCredentialsProviderProps}
        databaseId={
          cmsCredentialsProviderProps &&
          "databaseId" in cmsCredentialsProviderProps
            ? cmsCredentialsProviderProps.databaseId!
            : "i2rUMXNMBuVqQk5M3WJBgc"
        }
        databaseToken={
          cmsCredentialsProviderProps &&
          "databaseToken" in cmsCredentialsProviderProps
            ? cmsCredentialsProviderProps.databaseToken!
            : "ycOrPup8UTOxaXu0g74PHO3UKjZEWr2yRWpfswFe8EVf2uwBT5I6BYCqcdcEB8SabwLGy8BiHeKsWBrRMAQ"
        }
        host={
          cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
            ? cmsCredentialsProviderProps.host!
            : "https://data.plasmic.app"
        }
        locale={
          cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
            ? cmsCredentialsProviderProps.locale!
            : "Default"
        }
      >
        <WordpressProvider
          {...wordpressProviderProps}
          wordpressUrl={
            wordpressProviderProps && "wordpressUrl" in wordpressProviderProps
              ? wordpressProviderProps.wordpressUrl!
              : "https://techcrunch.com/"
          }
        >
          {children}
        </WordpressProvider>
      </CmsCredentialsProvider>
    </AntdConfigProvider>
  );
}
