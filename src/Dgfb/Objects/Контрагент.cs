﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Dgfb
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контрагент.
    /// </summary>
    // *** Start programmer edit section *** (Контрагент CustomAttributes)

    // *** End programmer edit section *** (Контрагент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтрагентE", new string[] {
            "Организация as \'Организация\'",
            "Ответстлицо as \'Ответстлицо\'"})]
    [View("КонтрагентL", new string[] {
            "Организация as \'Организация\'",
            "Ответстлицо as \'Ответстлицо\'"})]
    public class Контрагент : ICSSoft.STORMNET.DataObject
    {
        
        private string fОрганизация;
        
        private string fОтветстлицо;
        
        // *** Start programmer edit section *** (Контрагент CustomMembers)

        // *** End programmer edit section *** (Контрагент CustomMembers)

        
        /// <summary>
        /// Организация.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Организация CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Организация CustomAttributes)
        [StrLen(255)]
        public virtual string Организация
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Организация Get start)

                // *** End programmer edit section *** (Контрагент.Организация Get start)
                string result = this.fОрганизация;
                // *** Start programmer edit section *** (Контрагент.Организация Get end)

                // *** End programmer edit section *** (Контрагент.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Организация Set start)

                // *** End programmer edit section *** (Контрагент.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Контрагент.Организация Set end)

                // *** End programmer edit section *** (Контрагент.Организация Set end)
            }
        }
        
        /// <summary>
        /// Ответстлицо.
        /// </summary>
        // *** Start programmer edit section *** (Контрагент.Ответстлицо CustomAttributes)

        // *** End programmer edit section *** (Контрагент.Ответстлицо CustomAttributes)
        [StrLen(255)]
        public virtual string Ответстлицо
        {
            get
            {
                // *** Start programmer edit section *** (Контрагент.Ответстлицо Get start)

                // *** End programmer edit section *** (Контрагент.Ответстлицо Get start)
                string result = this.fОтветстлицо;
                // *** Start programmer edit section *** (Контрагент.Ответстлицо Get end)

                // *** End programmer edit section *** (Контрагент.Ответстлицо Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контрагент.Ответстлицо Set start)

                // *** End programmer edit section *** (Контрагент.Ответстлицо Set start)
                this.fОтветстлицо = value;
                // *** Start programmer edit section *** (Контрагент.Ответстлицо Set end)

                // *** End programmer edit section *** (Контрагент.Ответстлицо Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтрагентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентE", typeof(IIS.Dgfb.Контрагент));
                }
            }
            
            /// <summary>
            /// "КонтрагентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтрагентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтрагентL", typeof(IIS.Dgfb.Контрагент));
                }
            }
        }
    }
}
