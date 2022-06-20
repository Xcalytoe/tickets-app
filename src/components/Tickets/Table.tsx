import React, { useEffect, useState } from "react";
import { TableStyled } from "./Tickets.styled";
import { timeDateFun } from "../../helper/services/function.service";
import { useFetchTickets } from "../../helper/data-hook/tickets";
import Spinner from "../Loader/Spinner";
import LoadedData from "../EmptyState/LoadedData";
import {
  useSearchText,
  useSelectFilter,
  useTickets,
} from "../../helper/data-store/tickets";
import filterLodash from "lodash/filter";
import { IGetSample } from "../../helper/Typeface";
import FilterData from "../EmptyState/FilterData";
import orderBy from "lodash/orderBy";

const Table = () => {
  const { mutate, isLoading, data } = useFetchTickets();

  const setTickets = useTickets(({ setTickets }) => setTickets);
  const getTickets = useTickets(({ tickets }) => tickets);
  const selectFilter = useSelectFilter(({ selectFilter }) => selectFilter);
  const searchText = useSearchText(({ searchText }) => searchText);

  const [displayTickets, setDisplayTickets] = useState<IGetSample[]>([]);
  const [sortToggle, setSortToggle] = useState(false);

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   store fetched data in global state
  useEffect(() => {
    setTickets(data);
    setDisplayTickets(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //    filter data from select
  useEffect(() => {
    getTickets && handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectFilter]);

  //  filter data from search
  useEffect(() => {
    setDisplayTickets(handleSearchFilter());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  //   filter tickets through select options
  const handleFilter = () => {
    const sortedData =
      selectFilter === "all"
        ? filterLodash(
            getTickets,
            (item: IGetSample) =>
              item.status === "resolved" || "open" || "feedback"
          )
        : filterLodash(getTickets, (item: any) => item.status === selectFilter);

    setDisplayTickets(sortedData); // save in state
  };
  // sort results
  const handleSort = () => {
    setSortToggle(!sortToggle);
    const sorted = orderBy(
      displayTickets,
      ["created_time"],
      [sortToggle ? "asc" : "desc"]
    );
    setDisplayTickets(sorted); // save in state
  };

  const handleSearchFilter = () => {
    return getTickets.filter((val: IGetSample) => {
      if (searchText === "") {
        return val;
      } else if (
        val.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      ) {
        return val;
      } else {
        return null;
      }
    });
  };

  const emptyGlobalFilter = getTickets?.length > 0;
  const emptyFilter = displayTickets && displayTickets?.length > 0;

  const ticketsTable = emptyGlobalFilter ? (
    Array.isArray(displayTickets) &&
    displayTickets?.map((item: IGetSample) => {
      const staff = item.latest_post_author.is_staff;
      return (
        <div key={item.id} className="table-row flex">
          <div className="ticket">
            <h4>{item.title}</h4>
            <p>{item.forum.title} </p>
          </div>
          <div className="status">
            <span className={item.status.toLowerCase()}>{item.status}</span>
          </div>
          <div className="date">
            <span>{timeDateFun(item.created_time)}</span>
          </div>
          <div className="replies">
            <img src={item.latest_post_author.avatar_url} alt="profile" />
            <p>
              last by{" "}
              {staff
                ? item.latest_post_author.display_name
                : item.author.display_name}
            </p>
            <div className="reply-flex">
              <div>
                <p>{item.num_replies}</p>
              </div>
              {staff && (
                <span>
                  {" "}
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 0.625C4.3099 0.625 3.65885 0.755208 3.04688 1.01562C2.44141 1.27604 1.91081 1.63411 1.45508 2.08984C1.00586 2.53906 0.651042 3.06641 0.390625 3.67188C0.130208 4.28385 0 4.9349 0 5.625C0 6.3151 0.130208 6.96615 0.390625 7.57812C0.651042 8.18359 1.00586 8.71419 1.45508 9.16992C1.91081 9.61914 2.44141 9.97396 3.04688 10.2344C3.65885 10.4948 4.3099 10.625 5 10.625C5.6901 10.625 6.34115 10.4948 6.95312 10.2344C7.55859 9.97396 8.08594 9.61914 8.53516 9.16992C8.99089 8.71419 9.34896 8.18359 9.60938 7.57812C9.86979 6.96615 10 6.3151 10 5.625C10 4.9349 9.86979 4.28385 9.60938 3.67188C9.34896 3.06641 8.99089 2.53906 8.53516 2.08984C8.08594 1.63411 7.55859 1.27604 6.95312 1.01562C6.34115 0.755208 5.6901 0.625 5 0.625ZM8.27148 6.62109C8.27148 6.79688 8.24219 6.96289 8.18359 7.11914C8.125 7.27539 8.04036 7.41536 7.92969 7.53906C7.82552 7.66276 7.69857 7.76042 7.54883 7.83203C7.4056 7.89714 7.25586 7.92969 7.09961 7.92969C6.77409 7.92969 6.4974 7.80273 6.26953 7.54883C6.04818 7.28841 5.9375 6.97917 5.9375 6.62109V4.63867C5.9375 4.56706 5.91471 4.50521 5.86914 4.45312C5.82357 4.40104 5.76823 4.375 5.70312 4.375C5.63151 4.375 5.57292 4.40104 5.52734 4.45312C5.48828 4.50521 5.46875 4.56706 5.46875 4.63867V6.62109C5.46875 6.79688 5.43945 6.96289 5.38086 7.11914C5.32227 7.27539 5.24089 7.41536 5.13672 7.53906C5.02604 7.66276 4.89909 7.76042 4.75586 7.83203C4.61263 7.89714 4.45964 7.92969 4.29688 7.92969C3.97135 7.92969 3.69466 7.80273 3.4668 7.54883C3.24544 7.28841 3.13477 6.97917 3.13477 6.62109V4.63867C3.13477 4.56706 3.11198 4.50521 3.06641 4.45312C3.02083 4.40104 2.96549 4.375 2.90039 4.375C2.83529 4.375 2.77995 4.40104 2.73438 4.45312C2.6888 4.50521 2.66602 4.56706 2.66602 4.63867V8.45703L1.71875 9.18945V4.62891C1.71875 4.45312 1.74479 4.28711 1.79688 4.13086C1.85547 3.97461 1.9401 3.83464 2.05078 3.71094C2.16146 3.58724 2.28841 3.49284 2.43164 3.42773C2.57487 3.35612 2.72461 3.32031 2.88086 3.32031C3.20638 3.32031 3.48307 3.45052 3.71094 3.71094C3.9388 3.96484 4.05273 4.27083 4.05273 4.62891V6.61133C4.05273 6.68294 4.07227 6.74479 4.11133 6.79688C4.1569 6.84896 4.21549 6.875 4.28711 6.875C4.35221 6.875 4.40755 6.84896 4.45312 6.79688C4.4987 6.74479 4.52148 6.68294 4.52148 6.61133V4.62891C4.52148 4.27083 4.63542 3.96484 4.86328 3.71094C5.09115 3.45052 5.36458 3.32031 5.68359 3.32031C6.00911 3.32031 6.28255 3.45052 6.50391 3.71094C6.73177 3.96484 6.8457 4.27083 6.8457 4.62891V6.61133C6.8457 6.68294 6.86849 6.74479 6.91406 6.79688C6.95964 6.84896 7.01497 6.875 7.08008 6.875C7.15169 6.875 7.20703 6.84896 7.24609 6.79688C7.29167 6.74479 7.31445 6.68294 7.31445 6.61133V2.79297L8.25195 2.06055V6.62109H8.27148Z"
                      fill="black"
                    />
                  </svg>
                  Staff
                </span>
              )}
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <LoadedData />
  );
  return (
    <TableStyled>
      {emptyFilter && (
        <header className="flex">
          <div className="ticket">
            <h4>Ticket</h4>
          </div>
          <div className="status">
            <h4>Status</h4>
          </div>
          <div className="date">
            <h4>
              Created On
              <button onClick={handleSort}>
                {!sortToggle ? <ArrowDown /> : <ArrowUp />}
              </button>
            </h4>
          </div>
          <div className="replies">
            <h4>Replies</h4>
          </div>
        </header>
      )}
      {/* table rows  */}
      {isLoading && (
        <div
          style={{
            paddingTop: 80,
            paddingBottom: 80,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Spinner colorLight="#ededed" colorDark=" #333333" />
        </div>
      )}
      {/* display when search is empty or when select filter is empty  */}
      {displayTickets?.length === 0 && emptyGlobalFilter && searchText ? (
        <FilterData />
      ) : displayTickets?.length === 0 && emptyGlobalFilter ? (
        <LoadedData />
      ) : (
        ticketsTable
      )}
    </TableStyled>
  );
};

export default Table;

const ArrowDown = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.20313 9.03906L9.00196 5.24023C9.028 5.21419 9.04753 5.1849 9.06055 5.15234C9.08008 5.11328 9.08985 5.07422 9.08985 5.03516C9.08985 4.98958 9.08008 4.95052 9.06055 4.91797C9.04753 4.87891 9.028 4.84635 9.00196 4.82031L8.38672 4.21484C8.36068 4.1888 8.32813 4.16927 8.28907 4.15625C8.25651 4.13672 8.22071 4.12695 8.18164 4.12695C8.14258 4.12695 8.10352 4.13672 8.06446 4.15625C8.0319 4.16927 8.00261 4.1888 7.97657 4.21484L5.72071 6.46094V0.386719C5.72071 0.315104 5.69466 0.253255 5.64258 0.201172C5.59701 0.149089 5.53841 0.123047 5.4668 0.123047H4.5293C4.45769 0.123047 4.39584 0.149089 4.34375 0.201172C4.29818 0.253255 4.27539 0.315104 4.27539 0.386719V6.46094L2.01953 4.21484C1.99349 4.1888 1.96094 4.16927 1.92188 4.15625C1.88933 4.13672 1.85352 4.12695 1.81446 4.12695C1.77539 4.12695 1.73633 4.13672 1.69727 4.15625C1.65821 4.16927 1.62565 4.1888 1.59961 4.21484L0.994141 4.82031C0.968099 4.84635 0.945313 4.87891 0.925781 4.91797C0.912761 4.95052 0.90625 4.98958 0.90625 5.03516C0.90625 5.07422 0.912761 5.11328 0.925781 5.15234C0.945313 5.1849 0.968099 5.21419 0.994141 5.24023L4.79297 9.03906C4.81901 9.0651 4.84831 9.08464 4.88086 9.09766C4.91993 9.11719 4.95899 9.12695 4.99805 9.12695C5.03711 9.12695 5.07292 9.11719 5.10547 9.09766C5.14453 9.08464 5.17709 9.0651 5.20313 9.03906Z"
      fill="black"
    />
  </svg>
);
const ArrowUp = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.20313 0.96094L9.00196 4.75977C9.028 4.78581 9.04753 4.8151 9.06055 4.84766C9.08008 4.88672 9.08985 4.92578 9.08985 4.96484C9.08985 5.01042 9.08008 5.04948 9.06055 5.08203C9.04753 5.12109 9.028 5.15365 9.00196 5.17969L8.38672 5.78516C8.36068 5.8112 8.32813 5.83073 8.28907 5.84375C8.25651 5.86328 8.22071 5.87305 8.18164 5.87305C8.14258 5.87305 8.10352 5.86328 8.06446 5.84375C8.0319 5.83073 8.00261 5.8112 7.97657 5.78516L5.72071 3.53906V9.61328C5.72071 9.6849 5.69466 9.74675 5.64258 9.79883C5.59701 9.85091 5.53841 9.87695 5.4668 9.87695H4.5293C4.45769 9.87695 4.39584 9.85091 4.34375 9.79883C4.29818 9.74675 4.27539 9.6849 4.27539 9.61328V3.53906L2.01953 5.78516C1.99349 5.8112 1.96094 5.83073 1.92188 5.84375C1.88933 5.86328 1.85352 5.87305 1.81446 5.87305C1.77539 5.87305 1.73633 5.86328 1.69727 5.84375C1.65821 5.83073 1.62565 5.8112 1.59961 5.78516L0.994141 5.17969C0.968099 5.15365 0.945313 5.12109 0.925781 5.08203C0.912761 5.04948 0.90625 5.01042 0.90625 4.96484C0.90625 4.92578 0.912761 4.88672 0.925781 4.84766C0.945313 4.8151 0.968099 4.78581 0.994141 4.75977L4.79297 0.96094C4.81901 0.9349 4.84831 0.91536 4.88086 0.90234C4.91993 0.88281 4.95899 0.87305 4.99805 0.87305C5.03711 0.87305 5.07292 0.88281 5.10547 0.90234C5.14453 0.91536 5.17709 0.9349 5.20313 0.96094Z"
      fill="black"
    />
  </svg>
);
