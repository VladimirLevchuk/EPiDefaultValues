EPiDefaultValues
================

*CURRENT STATUS* **RELEASED, [Available on nuget.org](https://nuget.org/packages/EPiDefaultValues/)** 

Code-First default values for EPiServer projects. 
Allows to define default values in EPiServer projects code using standard [System.ComponentModel.DefaultValue](http://msdn.microsoft.com/en-us/library/system.componentmodel.defaultvalueattribute.aspx) attribute


    [ContentType(AvailableInEditMode = false)]
    public class ListBlock : BlockBase
    {
        // ... skipped ...

        [Display(Order = 110, Name = "Page Size")]
        [DefaultValue(10)]
        public virtual int PageSize { get; set; }
    }

