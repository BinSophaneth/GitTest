if (ButtonEvents.length > 0) {
      for (var j = 0; j < ButtonEvents.length; j++) {
        const btnRange = $("div[date='" + range[i] + "']>button:eq(" + j + ")");
        const classEventName = ButtonEvents[j];
        const IdArr = ButtonEvents[j].split("-");
        let id1 = events[Number(IdArr[1]) - 1].eventId;
        let id2 = event.eventId;
        const sDate1 = moment(events[Number(IdArr[1]) - 1].sdate, "DD/MM/YYYY");
        const sDate2 = moment(event.sdate, "DD/MM/YYYY");
        if ($("." + classEventName).length < range.length) {
          btnRange.before(btnApp.css("background-color", event.color));
          break;
        } else if (j === ButtonEvents.length - 1) {
          console.log("end", event.eventId, ButtonEvents[j]);
          if ($("." + classEventName).length === range.length) {
            if (sDate1.isSameOrBefore(sDate2) && id1 < id2) {
              console.log("id1 < id2", id1, id2, j);
              btnRange.after(
                btnApp.clone().css("background-color", event.color)
              );
            } else {
              console.log("id1 > id2", id1, id2);
              btnRange.before(btnApp.css("background-color", event.color));
            }
          } else {
            btnRange.after(btnApp.css("background-color", event.color));
          }
        } else if ($("." + classEventName).length === range.length) {
          if (sDate1.isSameOrBefore(sDate2) && id1 < id2) {
            console.log("missing id1 < id2", id1, id2, j);
            btnRange.after(btnApp.css("background-color", event.color));
          } else {
            console.log("missing id1 > id2", id1, id2);
            btnRange.before(btnApp.css("background-color", event.color));
          }
