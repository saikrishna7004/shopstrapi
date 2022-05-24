"use strict";(self.webpackChunkmystrapiapp=self.webpackChunkmystrapiapp||[]).push([[931],{3225:e=>{e.exports=JSON.parse(`{"ComponentIconPicker.search.placeholder":"Search for an icon","attribute.boolean":"Boolean","attribute.boolean.description":"Yes or no, 1 or 0, true or false","attribute.component":"Component","attribute.component.description":"Group of fields that you can repeat or reuse","attribute.date":"Date","attribute.date.description":"A date picker with hours, minutes and seconds","attribute.datetime":"Datetime","attribute.dynamiczone":"Dynamic zone","attribute.dynamiczone.description":"Dynamically pick component when editing content","attribute.email":"Email","attribute.email.description":"Email field with validations format","attribute.enumeration":"Enumeration","attribute.enumeration.description":"List of values, then pick one","attribute.json":"JSON","attribute.json.description":"Data in JSON format","attribute.media":"Media","attribute.media.description":"Files like images, videos, etc","attribute.null":" ","attribute.number":"Number","attribute.number.description":"Numbers (integer, float, decimal)","attribute.password":"Password","attribute.password.description":"Password field with encryption","attribute.relation":"Relation","attribute.relation.description":"Refers to a Collection Type","attribute.richtext":"Rich text","attribute.richtext.description":"A rich text editor with formatting options","attribute.text":"Text","attribute.text.description":"Small or long text like title or description","attribute.time":"Time","attribute.timestamp":"Timestamp","attribute.uid":"UID","attribute.uid.description":"Unique identifier","button.attributes.add.another":"Add another field","button.component.add":"Add a component","button.component.create":"Create new component","button.model.create":"Create new collection type","button.single-types.create":"Create new single type","component.repeatable":"(repeatable)","components.SelectComponents.displayed-value":"{number, plural, =0 {# components} one {# component} other {# components}} selected","components.componentSelect.no-component-available":"You have already added all your components","components.componentSelect.no-component-available.with-search":"There is no component matching your search","components.componentSelect.value-component":"{number} component selected (type to search for a component)","components.componentSelect.value-components":"{number} components selected","configurations":"Configurations","contentType.apiId-plural.description":"Pluralized API ID","contentType.apiId-plural.label":"API ID (Plural)","contentType.apiId-singular.description":"The UID is used to generate the API routes and databases tables/collections","contentType.apiId-singular.label":"API ID (Singular)","contentType.collectionName.description":"Useful when the name of your Content Type and your table name differ","contentType.collectionName.label":"Collection name","contentType.displayName.label":"Display name","contentType.draftAndPublish.description":"Write a draft version of each entry before publishing it","contentType.draftAndPublish.label":"Draft/publish system","contentType.kind.change.warning":"You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten).","error.attributeName.reserved-name":"This name cannot be used in your content type as it might break other functionalities","error.contentType.pluralName-used":"This value cannot be the same as the singular one","error.contentType.singularName-used":"This value cannot be the same as the plural one","error.contentTypeName.reserved-name":"This name cannot be used in your project as it might break other functionalities","error.validation.enum-duplicate":"Duplicate values are not allowed","error.validation.enum-empty-string":"Empty strings are not allowed","error.validation.enum-number":"Values cannot start with a number","error.validation.minSupMax":"Can't be superior","error.validation.positive":"Must be a positive number","error.validation.regex":"Regex pattern is invalid","error.validation.relation.targetAttribute-taken":"This name exists in the target","form.attribute.component.option.add":"Add a component","form.attribute.component.option.create":"Create a new component","form.attribute.component.option.create.description":"A component is shared across types and components, it will be available and accessible everywhere.","form.attribute.component.option.repeatable":"Repeatable component","form.attribute.component.option.repeatable.description":"Best for multiple instances (array) of ingredients, meta tags, etc..","form.attribute.component.option.reuse-existing":"Use an existing component","form.attribute.component.option.reuse-existing.description":"Reuse a component already created to keep your data consistent across content-types.","form.attribute.component.option.single":"Single component","form.attribute.component.option.single.description":"Best for grouping fields like full address, main information, etc...","form.attribute.item.customColumnName":"Custom column names","form.attribute.item.customColumnName.description":"This is useful to rename database column names in a more comprehensive format for the API's responses","form.attribute.item.date.type.date":"date (ex: 01/01/{currentYear})","form.attribute.item.date.type.datetime":"datetime (ex: 01/01/{currentYear} 00:00 AM)","form.attribute.item.date.type.time":"time (ex: 00:00 AM)","form.attribute.item.defineRelation.fieldName":"Field name","form.attribute.item.enumeration.graphql":"Name override for GraphQL","form.attribute.item.enumeration.graphql.description":"Allows you to override the default generated name for GraphQL","form.attribute.item.enumeration.placeholder":"Ex:\\nmorning\\nnoon\\nevening","form.attribute.item.enumeration.rules":"Values (one line per value)","form.attribute.item.maximum":"Maximum value","form.attribute.item.maximumLength":"Maximum length","form.attribute.item.minimum":"Minimum value","form.attribute.item.minimumLength":"Minimum length","form.attribute.item.number.type":"Number format","form.attribute.item.number.type.biginteger":"big integer (ex: 123456789)","form.attribute.item.number.type.decimal":"decimal (ex: 2.22)","form.attribute.item.number.type.float":"float (ex: 3.33333333)","form.attribute.item.number.type.integer":"integer (ex: 10)","form.attribute.item.privateField":"Private field","form.attribute.item.privateField.description":"This field will not show up in the API response","form.attribute.item.requiredField":"Required field","form.attribute.item.requiredField.description":"You won't be able to create an entry if this field is empty","form.attribute.item.text.regex":"RegExp pattern","form.attribute.item.text.regex.description":"The text of the regular expression","form.attribute.item.uniqueField":"Unique field","form.attribute.item.uniqueField.description":"You won't be able to create an entry if there is an existing entry with identical content","form.attribute.media.allowed-types":"Select allowed types of media","form.attribute.media.allowed-types.option-files":"Files","form.attribute.media.allowed-types.option-images":"Images","form.attribute.media.allowed-types.option-videos":"Videos","form.attribute.media.option.multiple":"Multiple media","form.attribute.media.option.multiple.description":"Best for sliders, carousels or multiple files download","form.attribute.media.option.single":"Single media","form.attribute.media.option.single.description":"Best for avatar, profile picture or cover","form.attribute.settings.default":"Default value","form.attribute.text.option.long-text":"Long text","form.attribute.text.option.long-text.description":"Best for descriptions, biography. Exact search is disabled.","form.attribute.text.option.short-text":"Short text","form.attribute.text.option.short-text.description":"Best for titles, names, links (URL). It also enables exact search on the field.","form.button.add-components-to-dynamiczone":"Add components to the zone","form.button.add-field":"Add another field","form.button.add-first-field-to-created-component":"Add first field to the component","form.button.add.field.to.collectionType":"Add another field to this collection type","form.button.add.field.to.component":"Add another field to this component","form.button.add.field.to.contentType":"Add another field to this content type","form.button.add.field.to.singleType":"Add another field to this single type","form.button.cancel":"Cancel","form.button.collection-type.description":"Best for multiple instances like articles, products, comments, etc.","form.button.collection-type.name":"Collection Type","form.button.configure-component":"Configure the component","form.button.configure-view":"Configure the view","form.button.select-component":"Select a component","form.button.single-type.description":"Best for single instance like about us, homepage, etc.","form.button.single-type.name":"Single Type","form.contentType.divider.draft-publish":"Draft/Publish","from":"from","listView.headerLayout.description":"Build the data architecture of your content","menu.section.components.name":"Components","menu.section.models.name":"Collection Types","menu.section.single-types.name":"Single Types","modalForm.attribute.form.base.name.description":"No space is allowed for the name of the attribute","modalForm.attribute.form.base.name.placeholder":"e.g. Slug, SEO URL, Canonical URL","modalForm.attribute.target-field":"Attached field","modalForm.attributes.select-component":"Select a component","modalForm.attributes.select-components":"Select the components","modalForm.collectionType.header-create":"Create a collection type","modalForm.component.header-create":"Create a component","modalForm.components.create-component.category.label":"Select a category or enter a name to create a new one","modalForm.components.icon.label":"Icon","modalForm.editCategory.base.name.description":"No space is allowed for the name of the category","modalForm.header-edit":"Edit {name}","modalForm.header.categories":"Categories","modalForm.singleType.header-create":"Create a single type","modalForm.sub-header.addComponentToDynamicZone":"Add new component to the dynamic zone","modalForm.sub-header.attribute.create":"Add new {type} field","modalForm.sub-header.attribute.create.step":"Add new component ({step}/2)","modalForm.sub-header.attribute.edit":"Edit {name}","modalForm.sub-header.chooseAttribute.collectionType":"Select a field for your collection type","modalForm.sub-header.chooseAttribute.component":"Select a field for your component","modalForm.sub-header.chooseAttribute.singleType":"Select a field for your single type","modelPage.attribute.relation-polymorphic":"Relation (polymorphic)","modelPage.attribute.relationWith":"Relation with","notification.error.dynamiczone-min.validation":"At least one component is required in a dynamic zone to be able to save a content type","notification.info.autoreaload-disable":"The autoReload feature is required to use this plugin. Start your server with \`strapi develop\`","notification.info.creating.notSaved":"Please save your work before creating a new collection type or component","plugin.description.long":"Modelize the data structure of your API. Create new fields and relations in just a minute. The files are automatically created and updated in your project.","plugin.description.short":"Modelize the data structure of your API.","plugin.name":"Content-Type Builder","popUpForm.navContainer.advanced":"Advanced settings","popUpForm.navContainer.base":"Base settings","popUpWarning.bodyMessage.cancel-modifications":"Are you sure you want to cancel your modifications?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Are you sure you want to cancel your modifications? Some components have been created or modified...","popUpWarning.bodyMessage.category.delete":"Are you sure you want to delete this category? All the components will also be deleted.","popUpWarning.bodyMessage.component.delete":"Are you sure you want to delete this component?","popUpWarning.bodyMessage.contentType.delete":"Are you sure you want to delete this collection type?","popUpWarning.draft-publish.button.confirm":"Yes, disable","popUpWarning.draft-publish.message":"If you disable the Draft/Publish system, your drafts will be deleted.","popUpWarning.draft-publish.second-message":"Are you sure you want to disable it?","prompt.unsaved":"Are you sure you want to leave? All your modifications will be lost.","relation.attributeName.placeholder":"Ex: author, category, tag","relation.manyToMany":"has and belongs to many","relation.manyToOne":"has many","relation.manyWay":"has many","relation.oneToMany":"belongs to many","relation.oneToOne":"has and belongs to one","relation.oneWay":"has one","table.button.no-fields":"Add new field","table.content.create-first-content-type":"Create your first Collection-Type","table.content.no-fields.collection-type":"Add your first field to this Collection-Type","table.content.no-fields.component":"Add your first field to this component"}`)}}]);
