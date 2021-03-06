/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Option } from "./components/inputs/cluster-input/cluster-input";
import { Option as Option1 } from "./components/inputs/toggle-input/toggle-input";
export namespace Components {
    interface AlertElement {
        "dismissable": boolean;
        "persistKey": string;
        "theme": 'info' | 'warning' | 'danger' | 'good';
    }
    interface BreadcrumbList {
    }
    interface ButtonControl {
        "aside": string;
        "label": string;
        "theme": 'default' | 'blue' | 'primary' | 'sand' | 'green' | 'red' | 'light' | 'yellow';
        "tight": boolean;
        "variant": 'filled' | 'link' | 'outline';
    }
    interface ClusterInput {
        "checked": boolean;
        "label": string;
        "name": string;
        "single": boolean;
        "value": string;
    }
    interface ContentContainer {
        "bgColour": string;
        "colour": string;
    }
    interface DateInput {
        "initialValue": string;
        "name": string;
        "required": boolean;
        "value": string;
    }
    interface DetailElement {
        "initialState": 'open' | 'closed';
        "label": string;
    }
    interface DetailsList {
    }
    interface FieldElement {
        "label": string;
        "useLabel": boolean;
    }
    interface FooterContainer {
    }
    interface HeaderContainer {
        "logoSmall": string;
        "logoSrc": string;
        "serviceTitle": string;
    }
    interface LoadingElement {
    }
    interface MobileDisclosure {
        "label": string;
    }
    interface MoneyInput {
        "max": number;
        "min": number;
        "name": string;
        "step": number;
        "value": string;
    }
    interface NavLink {
        "target": string;
    }
    interface PinInput {
        "value": string;
    }
    interface PostcodeInput {
        "initialValue": string;
        "name": string;
        "value": string;
    }
    interface SidePanel {
        "closable": boolean;
        "isOpen": boolean;
        "label": string;
    }
    interface StripElement {
    }
    interface StripList {
        "label": string;
    }
    interface TextButton {
        "theme": 'default' | 'red' | 'yellow' | 'green';
    }
    interface TextInput {
        "autoComplete": string;
        "hint": string;
        "name": string;
        "required": boolean;
        "type": 'text' | 'password' | 'number';
        "value": string;
        "width": number;
    }
    interface ToggleInput {
        "checked": boolean;
        "label": string;
        "name": string;
        "single": boolean;
        "value": string;
    }
}
declare global {
    interface HTMLAlertElementElement extends Components.AlertElement, HTMLStencilElement {
    }
    var HTMLAlertElementElement: {
        prototype: HTMLAlertElementElement;
        new (): HTMLAlertElementElement;
    };
    interface HTMLBreadcrumbListElement extends Components.BreadcrumbList, HTMLStencilElement {
    }
    var HTMLBreadcrumbListElement: {
        prototype: HTMLBreadcrumbListElement;
        new (): HTMLBreadcrumbListElement;
    };
    interface HTMLButtonControlElement extends Components.ButtonControl, HTMLStencilElement {
    }
    var HTMLButtonControlElement: {
        prototype: HTMLButtonControlElement;
        new (): HTMLButtonControlElement;
    };
    interface HTMLClusterInputElement extends Components.ClusterInput, HTMLStencilElement {
    }
    var HTMLClusterInputElement: {
        prototype: HTMLClusterInputElement;
        new (): HTMLClusterInputElement;
    };
    interface HTMLContentContainerElement extends Components.ContentContainer, HTMLStencilElement {
    }
    var HTMLContentContainerElement: {
        prototype: HTMLContentContainerElement;
        new (): HTMLContentContainerElement;
    };
    interface HTMLDateInputElement extends Components.DateInput, HTMLStencilElement {
    }
    var HTMLDateInputElement: {
        prototype: HTMLDateInputElement;
        new (): HTMLDateInputElement;
    };
    interface HTMLDetailElementElement extends Components.DetailElement, HTMLStencilElement {
    }
    var HTMLDetailElementElement: {
        prototype: HTMLDetailElementElement;
        new (): HTMLDetailElementElement;
    };
    interface HTMLDetailsListElement extends Components.DetailsList, HTMLStencilElement {
    }
    var HTMLDetailsListElement: {
        prototype: HTMLDetailsListElement;
        new (): HTMLDetailsListElement;
    };
    interface HTMLFieldElementElement extends Components.FieldElement, HTMLStencilElement {
    }
    var HTMLFieldElementElement: {
        prototype: HTMLFieldElementElement;
        new (): HTMLFieldElementElement;
    };
    interface HTMLFooterContainerElement extends Components.FooterContainer, HTMLStencilElement {
    }
    var HTMLFooterContainerElement: {
        prototype: HTMLFooterContainerElement;
        new (): HTMLFooterContainerElement;
    };
    interface HTMLHeaderContainerElement extends Components.HeaderContainer, HTMLStencilElement {
    }
    var HTMLHeaderContainerElement: {
        prototype: HTMLHeaderContainerElement;
        new (): HTMLHeaderContainerElement;
    };
    interface HTMLLoadingElementElement extends Components.LoadingElement, HTMLStencilElement {
    }
    var HTMLLoadingElementElement: {
        prototype: HTMLLoadingElementElement;
        new (): HTMLLoadingElementElement;
    };
    interface HTMLMobileDisclosureElement extends Components.MobileDisclosure, HTMLStencilElement {
    }
    var HTMLMobileDisclosureElement: {
        prototype: HTMLMobileDisclosureElement;
        new (): HTMLMobileDisclosureElement;
    };
    interface HTMLMoneyInputElement extends Components.MoneyInput, HTMLStencilElement {
    }
    var HTMLMoneyInputElement: {
        prototype: HTMLMoneyInputElement;
        new (): HTMLMoneyInputElement;
    };
    interface HTMLNavLinkElement extends Components.NavLink, HTMLStencilElement {
    }
    var HTMLNavLinkElement: {
        prototype: HTMLNavLinkElement;
        new (): HTMLNavLinkElement;
    };
    interface HTMLPinInputElement extends Components.PinInput, HTMLStencilElement {
    }
    var HTMLPinInputElement: {
        prototype: HTMLPinInputElement;
        new (): HTMLPinInputElement;
    };
    interface HTMLPostcodeInputElement extends Components.PostcodeInput, HTMLStencilElement {
    }
    var HTMLPostcodeInputElement: {
        prototype: HTMLPostcodeInputElement;
        new (): HTMLPostcodeInputElement;
    };
    interface HTMLSidePanelElement extends Components.SidePanel, HTMLStencilElement {
    }
    var HTMLSidePanelElement: {
        prototype: HTMLSidePanelElement;
        new (): HTMLSidePanelElement;
    };
    interface HTMLStripElementElement extends Components.StripElement, HTMLStencilElement {
    }
    var HTMLStripElementElement: {
        prototype: HTMLStripElementElement;
        new (): HTMLStripElementElement;
    };
    interface HTMLStripListElement extends Components.StripList, HTMLStencilElement {
    }
    var HTMLStripListElement: {
        prototype: HTMLStripListElement;
        new (): HTMLStripListElement;
    };
    interface HTMLTextButtonElement extends Components.TextButton, HTMLStencilElement {
    }
    var HTMLTextButtonElement: {
        prototype: HTMLTextButtonElement;
        new (): HTMLTextButtonElement;
    };
    interface HTMLTextInputElement extends Components.TextInput, HTMLStencilElement {
    }
    var HTMLTextInputElement: {
        prototype: HTMLTextInputElement;
        new (): HTMLTextInputElement;
    };
    interface HTMLToggleInputElement extends Components.ToggleInput, HTMLStencilElement {
    }
    var HTMLToggleInputElement: {
        prototype: HTMLToggleInputElement;
        new (): HTMLToggleInputElement;
    };
    interface HTMLElementTagNameMap {
        "alert-element": HTMLAlertElementElement;
        "breadcrumb-list": HTMLBreadcrumbListElement;
        "button-control": HTMLButtonControlElement;
        "cluster-input": HTMLClusterInputElement;
        "content-container": HTMLContentContainerElement;
        "date-input": HTMLDateInputElement;
        "detail-element": HTMLDetailElementElement;
        "details-list": HTMLDetailsListElement;
        "field-element": HTMLFieldElementElement;
        "footer-container": HTMLFooterContainerElement;
        "header-container": HTMLHeaderContainerElement;
        "loading-element": HTMLLoadingElementElement;
        "mobile-disclosure": HTMLMobileDisclosureElement;
        "money-input": HTMLMoneyInputElement;
        "nav-link": HTMLNavLinkElement;
        "pin-input": HTMLPinInputElement;
        "postcode-input": HTMLPostcodeInputElement;
        "side-panel": HTMLSidePanelElement;
        "strip-element": HTMLStripElementElement;
        "strip-list": HTMLStripListElement;
        "text-button": HTMLTextButtonElement;
        "text-input": HTMLTextInputElement;
        "toggle-input": HTMLToggleInputElement;
    }
}
declare namespace LocalJSX {
    interface AlertElement {
        "dismissable"?: boolean;
        "persistKey"?: string;
        "theme"?: 'info' | 'warning' | 'danger' | 'good';
    }
    interface BreadcrumbList {
    }
    interface ButtonControl {
        "aside"?: string;
        "label"?: string;
        "theme"?: 'default' | 'blue' | 'primary' | 'sand' | 'green' | 'red' | 'light' | 'yellow';
        "tight"?: boolean;
        "variant"?: 'filled' | 'link' | 'outline';
    }
    interface ClusterInput {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<Option>) => void;
        "single"?: boolean;
        "value"?: string;
    }
    interface ContentContainer {
        "bgColour"?: string;
        "colour"?: string;
    }
    interface DateInput {
        "initialValue"?: string;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<string>) => void;
        "required"?: boolean;
        "value"?: string;
    }
    interface DetailElement {
        "initialState"?: 'open' | 'closed';
        "label"?: string;
    }
    interface DetailsList {
    }
    interface FieldElement {
        "label"?: string;
        "useLabel"?: boolean;
    }
    interface FooterContainer {
    }
    interface HeaderContainer {
        "logoSmall"?: string;
        "logoSrc"?: string;
        "serviceTitle"?: string;
    }
    interface LoadingElement {
    }
    interface MobileDisclosure {
        "label"?: string;
    }
    interface MoneyInput {
        "max"?: number;
        "min"?: number;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<string>) => void;
        "step"?: number;
        "value"?: string;
    }
    interface NavLink {
        "target"?: string;
    }
    interface PinInput {
        "onChanged"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface PostcodeInput {
        "initialValue"?: string;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface SidePanel {
        "closable"?: boolean;
        "isOpen"?: boolean;
        "label"?: string;
    }
    interface StripElement {
    }
    interface StripList {
        "label"?: string;
    }
    interface TextButton {
        "theme"?: 'default' | 'red' | 'yellow' | 'green';
    }
    interface TextInput {
        "autoComplete"?: string;
        "hint"?: string;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<string>) => void;
        "required"?: boolean;
        "type"?: 'text' | 'password' | 'number';
        "value"?: string;
        "width"?: number;
    }
    interface ToggleInput {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<Option>) => void;
        "single"?: boolean;
        "value"?: string;
    }
    interface IntrinsicElements {
        "alert-element": AlertElement;
        "breadcrumb-list": BreadcrumbList;
        "button-control": ButtonControl;
        "cluster-input": ClusterInput;
        "content-container": ContentContainer;
        "date-input": DateInput;
        "detail-element": DetailElement;
        "details-list": DetailsList;
        "field-element": FieldElement;
        "footer-container": FooterContainer;
        "header-container": HeaderContainer;
        "loading-element": LoadingElement;
        "mobile-disclosure": MobileDisclosure;
        "money-input": MoneyInput;
        "nav-link": NavLink;
        "pin-input": PinInput;
        "postcode-input": PostcodeInput;
        "side-panel": SidePanel;
        "strip-element": StripElement;
        "strip-list": StripList;
        "text-button": TextButton;
        "text-input": TextInput;
        "toggle-input": ToggleInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "alert-element": LocalJSX.AlertElement & JSXBase.HTMLAttributes<HTMLAlertElementElement>;
            "breadcrumb-list": LocalJSX.BreadcrumbList & JSXBase.HTMLAttributes<HTMLBreadcrumbListElement>;
            "button-control": LocalJSX.ButtonControl & JSXBase.HTMLAttributes<HTMLButtonControlElement>;
            "cluster-input": LocalJSX.ClusterInput & JSXBase.HTMLAttributes<HTMLClusterInputElement>;
            "content-container": LocalJSX.ContentContainer & JSXBase.HTMLAttributes<HTMLContentContainerElement>;
            "date-input": LocalJSX.DateInput & JSXBase.HTMLAttributes<HTMLDateInputElement>;
            "detail-element": LocalJSX.DetailElement & JSXBase.HTMLAttributes<HTMLDetailElementElement>;
            "details-list": LocalJSX.DetailsList & JSXBase.HTMLAttributes<HTMLDetailsListElement>;
            "field-element": LocalJSX.FieldElement & JSXBase.HTMLAttributes<HTMLFieldElementElement>;
            "footer-container": LocalJSX.FooterContainer & JSXBase.HTMLAttributes<HTMLFooterContainerElement>;
            "header-container": LocalJSX.HeaderContainer & JSXBase.HTMLAttributes<HTMLHeaderContainerElement>;
            "loading-element": LocalJSX.LoadingElement & JSXBase.HTMLAttributes<HTMLLoadingElementElement>;
            "mobile-disclosure": LocalJSX.MobileDisclosure & JSXBase.HTMLAttributes<HTMLMobileDisclosureElement>;
            "money-input": LocalJSX.MoneyInput & JSXBase.HTMLAttributes<HTMLMoneyInputElement>;
            "nav-link": LocalJSX.NavLink & JSXBase.HTMLAttributes<HTMLNavLinkElement>;
            "pin-input": LocalJSX.PinInput & JSXBase.HTMLAttributes<HTMLPinInputElement>;
            "postcode-input": LocalJSX.PostcodeInput & JSXBase.HTMLAttributes<HTMLPostcodeInputElement>;
            "side-panel": LocalJSX.SidePanel & JSXBase.HTMLAttributes<HTMLSidePanelElement>;
            "strip-element": LocalJSX.StripElement & JSXBase.HTMLAttributes<HTMLStripElementElement>;
            "strip-list": LocalJSX.StripList & JSXBase.HTMLAttributes<HTMLStripListElement>;
            "text-button": LocalJSX.TextButton & JSXBase.HTMLAttributes<HTMLTextButtonElement>;
            "text-input": LocalJSX.TextInput & JSXBase.HTMLAttributes<HTMLTextInputElement>;
            "toggle-input": LocalJSX.ToggleInput & JSXBase.HTMLAttributes<HTMLToggleInputElement>;
        }
    }
}
