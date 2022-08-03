import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import paginationFactory, {
  PaginationProvider, PaginationListStandalone
} from "react-bootstrap-table2-paginator";

export interface Props {
  data: any;
  columns: any;
  sizePerPage: number;
  totalCount: number;
  onTableChange: (type, { page, sizePerPage }) => any;
}

export interface State {
}

class TableAdvanced extends React.Component<Props, State> {
  static defaultProps: Partial<Props> = {
    data: [],
    columns: {},
    totalCount: 1
  };

  constructor(props: Props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <PaginationProvider pagination={paginationFactory({
        custom: true,
        totalSize: this.props.totalCount,
        sizePerPage: this.props.sizePerPage
      })}>
        {
          ({
             paginationProps,
             paginationTableProps
           }) => (
            <>
              <BootstrapTable
                wrapperClasses="table-responsive"
                classes="table table-head-custom table-vertical-center overflow-hidden mb-7"
                bootstrap4
                bordered={false}
                remote
                keyField="id"
                data={this.props.data}
                columns={this.props.columns}
                onTableChange={this.props.onTableChange}
                { ...paginationTableProps }
              >
              </BootstrapTable>
              <PaginationListStandalone
                {...paginationProps}
              />
            </>
          )
        }
      </PaginationProvider>
    )
  }

}

export default TableAdvanced;