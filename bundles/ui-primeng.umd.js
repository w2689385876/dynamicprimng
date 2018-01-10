(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ng-dynamic-forms/core'), require('primeng/primeng'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@ng-dynamic-forms/core', 'primeng/primeng', '@angular/common'], factory) :
	(factory((global.ngDF = global.ngDF || {}, global.ngDF.primengUI = {}),global.ng.core,global.ng.forms,global.ngDF.core,global['primeng/primeng'],global.ng.common));
}(this, (function (exports,core,forms,core$1,primeng,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var PrimeNGFormControlType = {
    Array: 1,
    //"ARRAY",
    AutoComplete: 2,
    //"AUTOCOMPLETE",
    Calendar: 3,
    //"CALENDAR",
    Checkbox: 4,
    //"CHECKBOX",
    Chips: 5,
    //"CHIPS",
    ColorPicker: 6,
    //COLOR_PICKER
    Dropdown: 7,
    //"DROPDOWN",
    Editor: 8,
    //"EDITOR",
    Group: 9,
    //"GROUP",
    Input: 10,
    //"INPUT",
    InputMask: 11,
    //"INPUT_MASK",
    InputSwitch: 12,
    //"INPUT_SWITCH",
    MultiSelect: 13,
    //"MULTI_SELECT",
    RadioGroup: 14,
    //"RADIO_GROUP",
    Rating: 15,
    // "RATING",
    Slider: 16,
    //"SLIDER",
    Spinner: 17,
    //"SPINNER,
    TextArea: 18,
};
PrimeNGFormControlType[PrimeNGFormControlType.Array] = "Array";
PrimeNGFormControlType[PrimeNGFormControlType.AutoComplete] = "AutoComplete";
PrimeNGFormControlType[PrimeNGFormControlType.Calendar] = "Calendar";
PrimeNGFormControlType[PrimeNGFormControlType.Checkbox] = "Checkbox";
PrimeNGFormControlType[PrimeNGFormControlType.Chips] = "Chips";
PrimeNGFormControlType[PrimeNGFormControlType.ColorPicker] = "ColorPicker";
PrimeNGFormControlType[PrimeNGFormControlType.Dropdown] = "Dropdown";
PrimeNGFormControlType[PrimeNGFormControlType.Editor] = "Editor";
PrimeNGFormControlType[PrimeNGFormControlType.Group] = "Group";
PrimeNGFormControlType[PrimeNGFormControlType.Input] = "Input";
PrimeNGFormControlType[PrimeNGFormControlType.InputMask] = "InputMask";
PrimeNGFormControlType[PrimeNGFormControlType.InputSwitch] = "InputSwitch";
PrimeNGFormControlType[PrimeNGFormControlType.MultiSelect] = "MultiSelect";
PrimeNGFormControlType[PrimeNGFormControlType.RadioGroup] = "RadioGroup";
PrimeNGFormControlType[PrimeNGFormControlType.Rating] = "Rating";
PrimeNGFormControlType[PrimeNGFormControlType.Slider] = "Slider";
PrimeNGFormControlType[PrimeNGFormControlType.Spinner] = "Spinner";
PrimeNGFormControlType[PrimeNGFormControlType.TextArea] = "TextArea";
var PRIME_NG_VIEW_CHILD_SELECTOR = "pAutoComplete,pCalendar,pCheckbox,pChips,pColorPicker,pDropdown,pEditor,\npInputMask,pInputSwitch,pInputText,pMultiSelect,pRating,pSlider,pSpinner,pInputTextarea";
var PRIME_NG_AUTOCOMPLETE_TEMPLATE_DIRECTIVES = {
    itemTemplate: "itemTemplate",
    selectedItemTemplate: "selectedItemTemplate"
};
var PRIME_NG_CHIPS_TEMPLATE_DIRECTIVES = {
    itemTemplate: "itemTemplate"
};
var PRIME_NG_DROPDOWN_LIST_TEMPLATE_DIRECTIVES = {
    itemTemplate: "itemTemplate"
};

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicPrimeNGFormControlComponent = /** @class */ (function (_super) {
    __extends$1(DynamicPrimeNGFormControlComponent, _super);
    function DynamicPrimeNGFormControlComponent(changeDetectorRef, layoutService, validationService) {
        var _this = _super.call(this, changeDetectorRef, layoutService, validationService) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.layoutService = layoutService;
        _this.validationService = validationService;
        _this.bindId = true;
        _this.context = null;
        _this.hasErrorMessaging = false;
        _this.blur = new core.EventEmitter();
        _this.change = new core.EventEmitter();
        _this.focus = new core.EventEmitter();
        _this.customEvent = new core.EventEmitter();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DynamicPrimeNGFormControlComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes["model"]) {
            this.type = DynamicPrimeNGFormControlComponent.getFormControlType(this.model);
        }
    };
    /**
     * @param {?} directive
     * @return {?}
     */
    DynamicPrimeNGFormControlComponent.prototype.setTemplateDirective = /**
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        var _this = this;
        if (this.pViewChild && (directive.modelId === this.model.id || directive.modelType === this.model.type)) {
            var /** @type {?} */ templateDirectives_1 = DynamicPrimeNGFormControlComponent.getTemplateDirectives(this.pViewChild);
            Object.keys(templateDirectives_1 || {}).forEach(function (key) {
                if (templateDirectives_1[key] === directive.as) {
                    (/** @type {?} */ (_this.pViewChild))[key] = directive.templateRef;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    DynamicPrimeNGFormControlComponent.prototype.setTemplates = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.setTemplates.call(this);
        this.templateList
            .filter(function (template) { return typeof template.as === "string"; })
            .forEach(function (template) { return _this.setTemplateDirective(template); });
    };
    /**
     * @param {?} _$event
     * @return {?}
     */
    DynamicPrimeNGFormControlComponent.prototype.onAutoComplete = /**
     * @param {?} _$event
     * @return {?}
     */
    function (_$event) {
        var /** @type {?} */ inputModel = /** @type {?} */ (this.model);
        if (Array.isArray(inputModel.list)) {
            this.suggestions = inputModel.list.map(function (item) { return item; });
        }
    };
    /**
     * @param {?} model
     * @return {?}
     */
    DynamicPrimeNGFormControlComponent.getFormControlType = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        debugger
        switch (model.type) {
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return PrimeNGFormControlType.Array;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return PrimeNGFormControlType.Checkbox;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return PrimeNGFormControlType.Group;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER:
                return PrimeNGFormControlType.ColorPicker;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                return PrimeNGFormControlType.Calendar;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_EDITOR:
                return PrimeNGFormControlType.Editor;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                var /** @type {?} */ inputModel = /** @type {?} */ (model);
                if (inputModel.inputType === core$1.DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER) {
                    return PrimeNGFormControlType.Spinner;
                }
                else if (inputModel.mask) {
                    return PrimeNGFormControlType.InputMask;
                }
                else if (Array.isArray(inputModel.list)) {
                    return PrimeNGFormControlType.AutoComplete;
                }
                else if (inputModel.multiple) {
                    return PrimeNGFormControlType.Chips;
                }
                else {
                    return PrimeNGFormControlType.Input;
                }
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return PrimeNGFormControlType.RadioGroup;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_RATING:
                return PrimeNGFormControlType.Rating;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                var /** @type {?} */ selectModel = /** @type {?} */ (model);
                return selectModel.multiple ? PrimeNGFormControlType.MultiSelect : PrimeNGFormControlType.Dropdown;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                return PrimeNGFormControlType.Slider;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                return PrimeNGFormControlType.InputSwitch;
            case core$1.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return PrimeNGFormControlType.TextArea;
            default:
                return null;
        }
    };
    /**
     * @param {?} component
     * @return {?}
     */
    DynamicPrimeNGFormControlComponent.getTemplateDirectives = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        switch (component.constructor) {
            case primeng.AutoComplete:
                return PRIME_NG_AUTOCOMPLETE_TEMPLATE_DIRECTIVES;
            case primeng.Chips:
                return PRIME_NG_CHIPS_TEMPLATE_DIRECTIVES;
            case primeng.Dropdown:
                return PRIME_NG_DROPDOWN_LIST_TEMPLATE_DIRECTIVES;
            default:
                return null;
        }
    };
    DynamicPrimeNGFormControlComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "dynamic-primeng-form-control,dynamic-form-primeng-control",
                    template: "<div [formGroup]=\"group\" [ngClass]=\"[getClass('element', 'container'), getClass('grid', 'container')]\"><div *ngIf=\"type !== 4 && model.label\" [ngClass]=\"getClass('grid', 'label')\"><label [for]=\"model.id\" [innerHTML]=\"model.label\" [ngClass]=\"getClass('element', 'label')\"></label></div><ng-container *ngTemplateOutlet=\"templates[0]?.templateRef; context: model\"></ng-container><div *ngIf=\"type === 9\" role=\"group\" [dynamicId]=\"bindId && model.id\" [formGroupName]=\"model.id\" [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\"><dynamic-primeng-form-control *ngFor=\"let _model of model.group\" [group]=\"control\" [hasErrorMessaging]=\"_model.hasErrorMessages\" [hidden]=\"_model.hidden\" [layout]=\"layout\" [model]=\"_model \" [templates]=\"templateList\" [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model)]\" (dfBlur)=\"onBlur($event)\" (dfChange)=\"onValueChange($event)\" (dfFocus)=\"onFocus($event)\" (pEvent)=\"onCustomEvent($event)\"></dynamic-primeng-form-control></div><div *ngIf=\"type === 14\" role=\"radiogroup\" [dynamicId]=\"bindId && model.id\" [ngClass]=\"[getClass('element', 'control'), getClass('grid', 'control')]\" [tabindex]=\"model.tabIndex\"><div *ngFor=\"let option of model.options$ | async\" [ngClass]=\"getClass('grid', 'option')\"><p-radioButton [formControlName]=\"model.id\" [label]=\"option.label\" [name]=\"model.id\" [ngClass]=\"getClass('element', 'option')\" [value]=\"option.value\" (click)=\"onValueChange($event)\"></p-radioButton></div></div><ng-container *ngIf=\"type !== 9 && type !== 14\"><div [ngClass]=\"getClass('grid', 'control')\" [ngSwitch]=\"type\"><div *ngSwitchCase=\"1\" [dynamicId]=\"bindId && model.id\" [formArrayName]=\"model.id\" [ngClass]=\"getClass('element', 'control')\"><div *ngFor=\"let groupModel of model.groups; let idx = index\" role=\"group\" [formGroupName]=\"idx\" [ngClass]=\"[getClass('element', 'group'), getClass('grid', 'group')]\"><dynamic-primeng-form-control *ngFor=\"let _model of groupModel.group\" [bindId]=\"false\" [context]=\"groupModel\" [group]=\"control.at(idx)\" [hasErrorMessaging]=\"_model.hasErrorMessages\" [hidden]=\"_model.hidden\" [layout]=\"layout\" [model]=\"_model\" [templates]=\"templateList\" [ngClass]=\"[getClass('element', 'host', _model), getClass('grid', 'host', _model)]\" (dfBlur)=\"onBlur($event)\" (dfChange)=\"onValueChange($event)\" (dfFocus)=\"onFocus($event)\" (pEvent)=\"onCustomEvent($event)\"></dynamic-primeng-form-control><ng-container *ngTemplateOutlet=\"templates[2]?.templateRef; context: groupModel\"></ng-container></div></div><p-autoComplete *ngSwitchCase=\"2\" #pAutoComplete [autoHighlight]=\"getAdditional('autoHighlight', false)\" [delay]=\"getAdditional('delay', 300)\" [dropdown]=\"getAdditional('dropdown', false)\" [dynamicId]=\"bindId && model.id\" [emptyMessage]=\"getAdditional('emptyMessage', null)\" [forceSelection]=\"getAdditional('forceSelection', false)\" [formControlName]=\"model.id\" [minLength]=\"getAdditional('minLength', 1)\" [multiple]=\"model.multiple\" [ngClass]=\"getClass('element', 'control')\" [placeholder]=\"model.placeholder\" [scrollHeight]=\"getAdditional('scrollHeight', '200px')\" [suggestions]=\"suggestions\" [tabindex]=\"model.tabIndex\" (onBlur)=\"onBlur($event)\" (change)=\"onValueChange($event)\" (onClear)=\"onCustomEvent($event, 'onClear')\" (onDropdownClick)=\"onCustomEvent($event, 'onDropdownClick')\" (onFocus)=\"onFocus($event)\" (onSelect)=\"onCustomEvent($event, 'onSelect')\" (onUnselect)=\"onCustomEvent($event, 'onUnselect')\" (completeMethod)=\"onAutoComplete($event)\"></p-autoComplete><p-calendar *ngSwitchCase=\"3\" #pCalendar [dateFormat]=\"model.format || 'mm/dd/yy'\" [defaultDate]=\"model.focusedDate\" [disabledDates]=\"getAdditional('disabledDates')\" [disabledDays]=\"getAdditional('disabledDays')\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [hourFormat]=\"getAdditional('hourFormat', '24')\" [icon]=\"getAdditional('icon', 'fa-calendar')\" [inline]=\"model.inline\" [locale]=\"getAdditional('locale', { firstDayOfWeek: 0, dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], today: 'Today', clear: 'Clear' })\" [maxDate]=\"model.max\" [maxDateCount]=\"getAdditional('maxDateCount')\" [minDate]=\"model.min\" [monthNavigator]=\"getAdditional('monthNavigator', false)\" [ngClass]=\"getClass('element', 'control')\" [placeholder]=\"model.placeholder\" [selectionMode]=\"getAdditional('selectionMode', 'single')\" [selectOtherMonths]=\"getAdditional('selectOtherMonths', false)\" [shortYearCutoff]=\"getAdditional('shortYearCutoff', '+10')\" [showButtonBar]=\"getAdditional('showButtonBar', false)\" [showIcon]=\"getAdditional('showIcon', true)\" [showOnFocus]=\"getAdditional('showOnFocus', true)\" [showOtherMonths]=\"getAdditional('showOtherMonths', true)\" [showSeconds]=\"model.showSeconds\" [stepHour]=\"getAdditional('stepHour', 1)\" [stepMinute]=\"getAdditional('stepMinute', 1)\" [stepSecond]=\"getAdditional('stepSecond', 1)\" [tabindex]=\"model.tabIndex\" [timeOnly]=\"model.type === 'TIMEPICKER'\" [utc]=\"getAdditional('utc', false)\" [yearNavigator]=\"getAdditional('yearNavigator', false)\" [yearRange]=\"getAdditional('yearRange')\" (onBlur)=\"onBlur($event)\" (onClearClick)=\"onCustomEvent($event, 'onClearClick')\" (onClose)=\"onCustomEvent($event, 'onClose')\" (onFocus)=\"onFocus($event)\" (onInput)=\"onValueChange($event)\" (onSelect)=\"onValueChange($event)\" (onTodayClick)=\"onCustomEvent($event, 'onTodayClick')\"></p-calendar><p-checkbox *ngSwitchCase=\"4\" #pCheckbox binary=\"true\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [label]=\"model.label\" [name]=\"model.name\" [ngClass]=\"getClass('element', 'control')\" [tabindex]=\"model.tabIndex\" [value]=\"model.value\" (onChange)=\"onValueChange($event)\"></p-checkbox><p-chips *ngSwitchCase=\"5\" #pChips [allowDuplicate]=\"getAdditional('allowDuplicate', true)\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"getClass('element', 'control')\" [tabindex]=\"model.tabIndex\" (change)=\"onValueChange($event)\" (onAdd)=\"onCustomEvent($event, 'onAdd')\" (onRemove)=\"onCustomEvent($event, 'onRemove')\"></p-chips><p-colorPicker *ngSwitchCase=\"6\" #pColorPicker [dynamicId]=\"bindId && model.id\" [format]=\"model.format || 'hex'\" [formControlName]=\"model.id\" [inline]=\"model.inline\" [ngClass]=\"getClass('element','control')\" [tabindex]=\"model.tabIndex\" (onChange)=\"onValueChange($event)\"></p-colorPicker><p-dropdown *ngSwitchCase=\"7\" #pDropdown [autoWidth]=\"getAdditional('autoWidth', true)\" [dropdownIcon]=\"getAdditional('dropdownIcon', 'fa fa-fw fa-caret-down')\" [dynamicId]=\"bindId && model.id\" [editable]=\"getAdditional('editable', false)\" [filter]=\"model.filterable\" [filterBy]=\"getAdditional('filterBy', null)\" [filterPlaceholder]=\"getAdditional('filterPlaceholder', null)\" [formControlName]=\"model.id\" [ngClass]=\"getClass('element', 'control')\" [options]=\"model.options\" [resetFilterOnHide]=\"getAdditional('resetFilterOnHide', false)\" [scrollHeight]=\"getAdditional('scrollHeight', '200px')\" [tabindex]=\"model.tabIndex\" (onBlur)=\"onBlur($event)\" (onChange)=\"onValueChange($event)\" (onFocus)=\"onFocus($event)\"></p-dropdown><p-editor *ngSwitchCase=\"8\" #pEditor [dynamicId]=\"bindId && model.id\" [formats]=\"getAdditional('formats', null)\" [formControlName]=\"model.id\" [ngClass]=\"getClass('element','control')\" (onSelectionChange)=\"onCustomEvent($event, 'onSelectionChange')\" (onTextChange)=\"onValueChange($event)\"></p-editor><ng-container *ngSwitchCase=\"10\"><input pInputText #pInputText [attr.accept]=\"model.accept\" [attr.list]=\"model.listId\" [attr.max]=\"model.max\" [attr.min]=\"model.min\" [attr.multiple]=\"model.multiple\" [attr.step]=\"model.step\" [autocomplete]=\"model.autoComplete\" [autofocus]=\"model.autoFocus\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [maxlength]=\"model.maxLength\" [minlength]=\"model.minLength\" [name]=\"model.name\" [ngClass]=\"getClass('element', 'control')\" [pattern]=\"model.pattern\" [placeholder]=\"model.placeholder\" [readonly]=\"model.readOnly\" [required]=\"model.required\" [spellcheck]=\"model.spellCheck\" [tabindex]=\"model.tabIndex\" [type]=\"model.inputType\" (blur)=\"onBlur($event)\" (change)=\"onValueChange($event)\" (focus)=\"onFocus($event)\"><datalist *ngIf=\"hasList\" [id]=\"model.listId\"><option *ngFor=\"let option of model.list\" [value]=\"option\"></option></datalist></ng-container><p-inputMask *ngSwitchCase=\"11\" #pInputMask [autoClear]=\"getAdditional('autoClear', true)\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [mask]=\"model.mask\" [ngClass]=\"getClass('element', 'control')\" [placeholder]=\"model.placeholder\" [readonly]=\"model.readOnly\" [slotChar]=\"getAdditional('slotChar', '_')\" [tabindex]=\"model.tabIndex\" (change)=\"onValueChange($event)\" (onBlur)=\"onBlur($event)\" (onComplete)=\"onCustomEvent($event, 'onComplete')\" (onFocus)=\"onFocus($event)\"></p-inputMask><p-inputSwitch *ngSwitchCase=\"12\" #pInputSwitch [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"getClass('element', 'control')\" [onLabel]=\"model.onLabel\" [offLabel]=\"model.offLabel\" [tabindex]=\"model.tabIndex\" (onChange)=\"onValueChange($event)\"></p-inputSwitch><p-multiSelect *ngSwitchCase=\"13\" #pMultiSelect [defaultLabel]=\"getAdditional('defaultLabel', 'Choose')\" [displaySelectedLabel]=\"getAdditional('displaySelectedLabel', true)\" [dropdownIcon]=\"getAdditional('dropdownIcon', 'fa fa-fw fa-caret-down')\" [dynamicId]=\"bindId && model.id\" [filter]=\"model.filterable\" [formControlName]=\"model.id\" [maxSelectedLabels]=\"getAdditional('maxSelectedLabels', 3)\" [ngClass]=\"getClass('element', 'control')\" [options]=\"model.options\" [overlayVisible]=\"getAdditional('overlayVisible', false)\" [resetFilterOnHide]=\"getAdditional('resetFilterOnHide', false)\" [scrollHeight]=\"getAdditional('scrollHeight', '200px')\" [selectedItemsLabel]=\"getAdditional('selectedItemsLabel', '{0} items selected')\" [showToggleAll]=\"getAdditional('showToggleAll', true)\" [tabindex]=\"model.tabIndex\" (onBlur)=\"onBlur($event)\" (onChange)=\"onValueChange($event)\" (onFocus)=\"onFocus($event)\"></p-multiSelect><p-rating *ngSwitchCase=\"15\" #pRating [cancel]=\"getAdditional('cancel', true)\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [iconCancelClass]=\"getAdditional('iconCancelClass', 'fa-ban')\" [iconOffClass]=\"getAdditional('iconOffClass', 'fa-star-o')\" [iconOnClass]=\"getAdditional('iconOnClass', 'fa-star')\" [ngClass]=\"getClass('element', 'control')\" [stars]=\"model.max\" (onCancel)=\"onCustomEvent($event, 'onCancel')\" (onRate)=\"onValueChange($event)\"></p-rating><p-slider *ngSwitchCase=\"16\" #pSlider [animate]=\"getAdditional('animate', false)\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [min]=\"model.min\" [max]=\"model.max\" [ngClass]=\"getClass('element', 'control')\" [orientation]=\"model.vertical ? 'vertical' : 'horizontal'\" [range]=\"getAdditional('range', false)\" [step]=\"model.step\" (onChange)=\"onValueChange($event)\" (onSlideEnd)=\"onCustomEvent($event, 'onSlideEnd')\"></p-slider><p-spinner *ngSwitchCase=\"17\" #pSpinner [decimalSeparator]=\"getAdditional('decimalSeparator', '.')\" [dynamicId]=\"bindId && model.id\" [formatInput]=\"getAdditional('formatInput', true)\" [formControlName]=\"model.id\" [min]=\"model.min\" [max]=\"model.max\" [ngClass]=\"getClass('element', 'control')\" [placeholder]=\"model.placeholder\" [step]=\"model.step || 1\" [tabindex]=\"model.tabIndex\" [thousandSeparator]=\"getAdditional('thousandSeparator', ',')\" (onBlur)=\"onBlur($event)\" (onChange)=\"onValueChange($event)\" (onFocus)=\"onFocus($event)\"></p-spinner><textarea *ngSwitchCase=\"18\" pInputTextarea #pInputTextarea [cols]=\"model.cols\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [maxlength]=\"model.maxLength\" [minlength]=\"model.minLength\" [name]=\"model.name\" [ngClass]=\"getClass('element', 'control')\" [placeholder]=\"model.placeholder\" [readonly]=\"model.readOnly\" [required]=\"model.required\" [rows]=\"model.rows\" [spellcheck]=\"model.spellCheck\" [tabindex]=\"model.tabIndex\" [wrap]=\"model.wrap\" (blur)=\"onBlur($event)\" (change)=\"onValueChange($event)\" (focus)=\"onFocus($event)\" (onResize)=\"onCustomEvent($event, 'onResize')\"></textarea></div></ng-container><ul *ngIf=\"showErrorMessages\" [ngClass]=\"[getClass('element', 'errors'), getClass('grid', 'errors')]\"><li *ngFor=\"let message of errorMessages\" class=\"ui-message ui-messages-error ui-corner-all\">{{ message }}</li></ul><ng-container *ngTemplateOutlet=\"templates[1]?.templateRef; context: model\"></ng-container><ng-content></ng-content></div>"
                },] },
    ];
    /** @nocollapse */
    DynamicPrimeNGFormControlComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef, },
        { type: core$1.DynamicFormLayoutService, },
        { type: core$1.DynamicFormValidationService, },
    ]; };
    DynamicPrimeNGFormControlComponent.propDecorators = {
        "contentTemplateList": [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] },],
        "inputTemplateList": [{ type: core.Input, args: ["templates",] },],
        "bindId": [{ type: core.Input },],
        "context": [{ type: core.Input },],
        "group": [{ type: core.Input },],
        "hasErrorMessaging": [{ type: core.Input },],
        "layout": [{ type: core.Input },],
        "model": [{ type: core.Input },],
        "blur": [{ type: core.Output, args: ["dfBlur",] },],
        "change": [{ type: core.Output, args: ["dfChange",] },],
        "focus": [{ type: core.Output, args: ["dfFocus",] },],
        "customEvent": [{ type: core.Output, args: ["pEvent",] },],
        "pViewChild": [{ type: core.ViewChild, args: [PRIME_NG_VIEW_CHILD_SELECTOR,] },],
    };
    return DynamicPrimeNGFormControlComponent;
}(core$1.DynamicFormControlComponent));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicPrimeNGFormComponent = /** @class */ (function (_super) {
    __extends(DynamicPrimeNGFormComponent, _super);
    function DynamicPrimeNGFormComponent(formService, layoutService) {
        var _this = _super.call(this, formService, layoutService) || this;
        _this.formService = formService;
        _this.layoutService = layoutService;
        _this.blur = new core.EventEmitter();
        _this.change = new core.EventEmitter();
        _this.focus = new core.EventEmitter();
        _this.customEvent = new core.EventEmitter();
        return _this;
    }
    DynamicPrimeNGFormComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "dynamic-primeng-form",
                    template: "<dynamic-primeng-form-control *ngFor=\"let model of formModel; trackBy: trackByFn\" [group]=\"formGroup\" [hasErrorMessaging]=\"model.hasErrorMessages\" [hidden]=\"model.hidden\" [layout]=\"formLayout\" [model]=\"model\" [ngClass]=\"[getClass(model, 'element', 'host'), getClass(model, 'grid', 'host')]\" [templates]=\"templates\" (dfBlur)=\"onEvent($event, 'blur')\" (dfChange)=\"onEvent($event, 'change')\" (dfFocus)=\"onEvent($event, 'focus')\" (pEvent)=\"onEvent($event, 'custom')\"></dynamic-primeng-form-control>"
                },] },
    ];
    /** @nocollapse */
    DynamicPrimeNGFormComponent.ctorParameters = function () { return [
        { type: core$1.DynamicFormService, },
        { type: core$1.DynamicFormLayoutService, },
    ]; };
    DynamicPrimeNGFormComponent.propDecorators = {
        "formGroup": [{ type: core.Input, args: ["group",] },],
        "formModel": [{ type: core.Input, args: ["model",] },],
        "formLayout": [{ type: core.Input, args: ["layout",] },],
        "blur": [{ type: core.Output, args: ["dfBlur",] },],
        "change": [{ type: core.Output, args: ["dfChange",] },],
        "focus": [{ type: core.Output, args: ["dfFocus",] },],
        "customEvent": [{ type: core.Output, args: ["pEvent",] },],
        "templates": [{ type: core.ContentChildren, args: [core$1.DynamicTemplateDirective,] },],
        "components": [{ type: core.ViewChildren, args: [DynamicPrimeNGFormControlComponent,] },],
    };
    return DynamicPrimeNGFormComponent;
}(core$1.DynamicFormComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicFormsPrimeNGUIModule = /** @class */ (function () {
    function DynamicFormsPrimeNGUIModule() {
    }
    DynamicFormsPrimeNGUIModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule,
                        core$1.DynamicFormsCoreModule,
                        primeng.AutoCompleteModule,
                        primeng.CalendarModule,
                        primeng.CheckboxModule,
                        primeng.ChipsModule,
                        primeng.ColorPickerModule,
                        primeng.DropdownModule,
                        primeng.EditorModule,
                        primeng.InputMaskModule,
                        primeng.InputSwitchModule,
                        primeng.InputTextModule,
                        primeng.InputTextareaModule,
                        primeng.MultiSelectModule,
                        primeng.RadioButtonModule,
                        primeng.RatingModule,
                        primeng.SliderModule,
                        primeng.SpinnerModule
                    ],
                    declarations: [
                        DynamicPrimeNGFormControlComponent,
                        DynamicPrimeNGFormComponent
                    ],
                    exports: [
                        core$1.DynamicFormsCoreModule,
                        DynamicPrimeNGFormControlComponent,
                        DynamicPrimeNGFormComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicFormsPrimeNGUIModule.ctorParameters = function () { return []; };
    return DynamicFormsPrimeNGUIModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

exports.DynamicPrimeNGFormComponent = DynamicPrimeNGFormComponent;
exports.PrimeNGFormControlType = PrimeNGFormControlType;
exports.PRIME_NG_VIEW_CHILD_SELECTOR = PRIME_NG_VIEW_CHILD_SELECTOR;
exports.PRIME_NG_AUTOCOMPLETE_TEMPLATE_DIRECTIVES = PRIME_NG_AUTOCOMPLETE_TEMPLATE_DIRECTIVES;
exports.PRIME_NG_CHIPS_TEMPLATE_DIRECTIVES = PRIME_NG_CHIPS_TEMPLATE_DIRECTIVES;
exports.PRIME_NG_DROPDOWN_LIST_TEMPLATE_DIRECTIVES = PRIME_NG_DROPDOWN_LIST_TEMPLATE_DIRECTIVES;
exports.DynamicPrimeNGFormControlComponent = DynamicPrimeNGFormControlComponent;
exports.DynamicFormsPrimeNGUIModule = DynamicFormsPrimeNGUIModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-primeng.umd.js.map
